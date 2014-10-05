// directives for activity
angular.module('nossoSistema.activity', [])
	.controller('ActivityController', ['$scope', '$http' , function($scope, $http) {
		var ctrl = this,
			items = ctrl.items = $scope.items = [];

		ctrl.loadItem = function(loadedItem, callback) {
			angular.forEach(items, function(item) {
		      	if (item.active && item !== loadedItem) {
		        	item.active = false;
		        	//item.onDeselect();
		      	}
		    });

			loadedItem.active = true;
			if (angular.isDefined(loadedItem.onLoad)) {
				loadedItem.onLoad(loadedItem);
			}

			$http.get(loadedItem.src).then(function(result) {
				var content = result.data;
				if (angular.isDefined(callback)) {
					callback(content);
				}
			});
		};

		ctrl.addItem = function(item) {
			items.push(item);
			if (!angular.isDefined(item.active)) {
				// set the default
				item.active = false;
			} else if (item.active) {
				ctrl.loadItem(item);
			}
		};

		ctrl.refresh = function(e) {
			var btn = angular.element(e.currentTarget);
			btn.button('loading');

			if (angular.isDefined($scope.onRefresh)) {
				$scope.onRefresh($scope, function() {
					btn.button('reset');
				});
			} else {
				btn.button('reset');
			}
		};
	}])

	.directive('activity', function() {
		return {
			restrict: 'AE',
			replace: true,
			transclude: true,
			controller: 'ActivityController',
			scope: {
				onRefresh: '=onrefresh',
			},
			template: '<span data-ng-transclude=""></span>'
		};
	})

	.directive('activityButton', function() {
		return {
			restrict: 'AE',
			require: '^activity',
			replace: true,
			transclude: true,
			controller: function($scope) {

			},
			scope: {
				icon: '@',
				total: '='
			},
			template: '\
					<span id="activity" class="activity-dropdown">\
						<i ng-class="icon"></i>\
						<b class="badge"> {{ total }} </b>\
					</span>',
			link: function(scope, element, attrs, activityCtrl) {

				attrs.$observe('icon', function(value) {
					if (!angular.isDefined(value))
						scope.icon = 'fa fa-user';
				});

				element.on('click', function(e) {
					var $this = $(this);

					if ($this.find('.badge').hasClass('bg-color-red')) {
						$this.find('.badge').removeClassPrefix('bg-color-');
						$this.find('.badge').text("0");
						// console.log("Ajax call for activity")
					}

					if (!$this.next('.ajax-dropdown').is(':visible')) {
						$this.next('.ajax-dropdown').fadeIn(150);
						$this.addClass('active');
					} else {
						$this.next('.ajax-dropdown').fadeOut(150);
						$this.removeClass('active');
					}

					var mytest = $this.next('.ajax-dropdown').find('.btn-group > .active > input').attr('id');
					//console.log(mytest)

					e.preventDefault();
				});

				if (scope.total > 0) {
					var $badge = element.find('.badge');
					$badge.addClass("bg-color-red bounceIn animated");
				}
			}
		};
	})

	.controller('ActivityContentController', ['$scope' , function($scope) {
		var ctrl = this;
		$scope.currentContent = '';
		ctrl.loadContent = function(content) {
			$scope.currentContent = content;
		}
	}])

	.directive('activityContent', ['$compile', function($compile) {
		return {
			restrict: 'AE',
			transclude: true,
			require: '^activity',
			replace: true,
			scope: {
				footer: '=?'
			},
			controller: 'ActivityContentController',
			template: '\
				<div class="ajax-dropdown">\
					<div class="btn-group btn-group-justified" data-toggle="buttons" data-ng-transclude=""></div>\
					<div class="ajax-notifications custom-scroll">\
						<div class="alert alert-transparent">\
							<h4>Click a button to show messages here</h4>\
							This blank page message helps protect your privacy, or you can show the first message here automatically.\
						</div>\
						<i class="fa fa-lock fa-4x fa-border"></i>\
					</div>\
					<span> {{ footer }}\
						<button type="button" data-loading-text="Loading..." data-ng-click="refresh($event)" class="btn btn-xs btn-default pull-right" data-activty-refresh-button="">\
						<i class="fa fa-refresh"></i>\
						</button>\
					</span>\
				</div>',
			link: function(scope, element, attrs, activityCtrl) {
				scope.refresh = function(e) {
					activityCtrl.refresh(e);
				};

				scope.$watch('currentContent', function(newContent, oldContent) {
					if (newContent !== oldContent) {
						var el = element.find('.ajax-notifications').html(newContent);
						$compile(el)(scope);
					}
				});
			}
		};
	}])

	.directive('activityItem', function() {
		return {
			restrict: 'AE',
			require: ['^activity', '^activityContent'],
			scope: {
				src: '=',
				onLoad: '=onload',
				active: '=?'
			},
			controller: function() {

			},
			transclude: true,
			replace: true,
			template: '\
				<label class="btn btn-default" data-ng-click="loadItem()" ng-class="{active: active}">\
					<input type="radio" name="activity">\
					<span data-ng-transclude=""></span>\
				</label>',
			link: function(scope, element, attrs, parentCtrls) {
				var activityCtrl = parentCtrls[0],
					contentCtrl = parentCtrls[1];

				scope.$watch('active', function(active) {
					if (active) {
						activityCtrl.loadItem(scope, function(content) {
							contentCtrl.loadContent(content);
						});
					}
				});
				activityCtrl.addItem(scope);

				scope.loadItem = function() {
					scope.active = true;
				};
			}
		};
	})

;