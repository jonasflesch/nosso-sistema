angular.module('nossoSistema.ribbon', [])
	.factory('ribbon', ['$rootScope', function($rootScope) {
		var ribbon = {
			currentBreadcrumb: [],
			updateBreadcrumb: function(crumbs) {
				crumbs.push('Home');
				var breadCrumb = crumbs.reverse();
				ribbon.currentBreadcrumb = breadCrumb;
				$rootScope.$broadcast('navItemSelected', breadCrumb);
			}
		};

		return ribbon;
	}])
	.directive('ribbon', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.append('<div class="demo"><span id="demo-setting"><i class="fa fa-cog txt-color-blueDark"></i></span> <form><legend class="no-padding margin-bottom-10">Layout Options</legend><section><label><input name="subscription" id="smart-fixed-header" type="checkbox" class="checkbox style-0"><span>Fixed Header</span></label><label><input type="checkbox" name="terms" id="smart-fixed-navigation" class="checkbox style-0"><span>Fixed Navigation</span></label><label><input type="checkbox" name="terms" id="smart-fixed-ribbon" class="checkbox style-0"><span>Fixed Ribbon</span></label><label><input type="checkbox" name="terms" id="smart-fixed-footer" class="checkbox style-0"><span>Fixed Footer</span></label><label><input type="checkbox" name="terms" id="smart-fixed-container" class="checkbox style-0"><span>Inside <b>.container</b> <div class="font-xs text-right">(non-responsive)</div></span></label><label style="display:block;"><input type="checkbox" id="smart-topmenu" class="checkbox style-0"><span>Menu on <b>top</b></span></label> <span id="smart-bgimages"></span></section><section><h6 class="margin-top-10 semi-bold margin-bottom-5">Clear Localstorage</h6><a href="javascript:void(0);" class="btn btn-xs btn-block btn-primary" id="reset-smart-widget"><i class="fa fa-refresh"></i> Factory Reset</a></section> <h6 class="margin-top-10 semi-bold margin-bottom-5">SmartAdmin Skins</h6><section id="smart-styles"><a href="javascript:void(0);" id="smart-style-0" data-skinlogo="img/logo.png" class="btn btn-block btn-xs txt-color-white margin-right-5" style="background-color:#4E463F;"><i class="fa fa-check fa-fw" id="skin-checked"></i>Smart Default</a><a href="javascript:void(0);" id="smart-style-1" data-skinlogo="img/logo-white.png" class="btn btn-block btn-xs txt-color-white" style="background:#3A4558;">Dark Elegance</a><a href="javascript:void(0);" id="smart-style-2" data-skinlogo="img/logo-blue.png" class="btn btn-xs btn-block txt-color-darken margin-top-5" style="background:#fff;">Ultra Light</a><a href="javascript:void(0);" id="smart-style-3" data-skinlogo="img/logo-pale.png" class="btn btn-xs btn-block txt-color-white margin-top-5" style="background:#f78c40">Google Skin</a></section></form> </div>')

				// hide bg options
				var smartbgimage = "<h6 class='margin-top-10 semi-bold'>Background</h6><img src='img/pattern/graphy-xs.png' data-htmlbg-url='img/pattern/graphy.png' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/tileable_wood_texture-xs.png' width='22' height='22' data-htmlbg-url='img/pattern/tileable_wood_texture.png' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/sneaker_mesh_fabric-xs.png' width='22' height='22' data-htmlbg-url='img/pattern/sneaker_mesh_fabric.png' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/nistri-xs.png' data-htmlbg-url='img/pattern/nistri.png' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/paper-xs.png' data-htmlbg-url='img/pattern/paper.png' width='22' height='22' class='bordered cursor-pointer'>";
				$("#smart-bgimages")
				    .fadeOut();

				$('#demo-setting')
				    .click(function () {
				        //console.log('setting');
				        $('#ribbon .demo')
				            .toggleClass('activate');
				    })
				/*
				 * FIXED HEADER
				 */
				$('input[type="checkbox"]#smart-fixed-header')
				    .click(function () {
				        if ($(this)
				            .is(':checked')) {
				            //checked
				            $.root_.addClass("fixed-header");
				        } else {
				            //unchecked
				            $('input[type="checkbox"]#smart-fixed-ribbon')
				                .prop('checked', false);
				            $('input[type="checkbox"]#smart-fixed-navigation')
				                .prop('checked', false);

				            $.root_.removeClass("fixed-header");
				            $.root_.removeClass("fixed-navigation");
				            $.root_.removeClass("fixed-ribbon");

				        }
				    });

				/*
				 * FIXED NAV
				 */
				$('input[type="checkbox"]#smart-fixed-navigation')
				    .click(function () {
				        if ($(this)
				            .is(':checked')) {
				            //checked
				            $('input[type="checkbox"]#smart-fixed-header')
				                .prop('checked', true);

				            $.root_.addClass("fixed-header");
				            $.root_.addClass("fixed-navigation");

				            $('input[type="checkbox"]#smart-fixed-container')
				                .prop('checked', false);
				            $.root_.removeClass("container");

				        } else {
				            //unchecked
				            $('input[type="checkbox"]#smart-fixed-ribbon')
				                .prop('checked', false);
				            $.root_.removeClass("fixed-navigation");
				            $.root_.removeClass("fixed-ribbon");
				        }
				    });

				/*
				 * FIXED RIBBON
				 */
				$('input[type="checkbox"]#smart-fixed-ribbon')
				    .click(function () {
				        if ($(this)
				            .is(':checked')) {

				            //checked
				            $('input[type="checkbox"]#smart-fixed-header')
				                .prop('checked', true);
				            $('input[type="checkbox"]#smart-fixed-navigation')
				                .prop('checked', true);
				            $('input[type="checkbox"]#smart-fixed-ribbon')
				                .prop('checked', true);

				            //apply
				            $.root_.addClass("fixed-header");
				            $.root_.addClass("fixed-navigation");
				            $.root_.addClass("fixed-ribbon");

				            $('input[type="checkbox"]#smart-fixed-container')
				                .prop('checked', false);
				            $.root_.removeClass("container");

				        } else {
				            //unchecked
				            $.root_.removeClass("fixed-ribbon");
				        }
				    });

				/*
				 * RTL SUPPORT
				 */
				$('input[type="checkbox"]#smart-fixed-footer')
				    .click(function () {
				        if ($(this)
				            .is(':checked')) {

				            //checked
				            $.root_.addClass("fixed-page-footer");

				        } else {
				            //unchecked
				            $.root_.removeClass("fixed-page-footer");
				        }
				    });


				/*
				 * RTL SUPPORT
				 */
				$('input[type="checkbox"]#smart-rtl')
				    .click(function () {
				        if ($(this)
				            .is(':checked')) {

				            //checked
				            $.root_.addClass("smart-rtl");

				        } else {
				            //unchecked
				            $.root_.removeClass("smart-rtl");
				        }
				    });

				/*
				 * MENU ON TOP
				 */

				$('#smart-topmenu')
				    .on('change', function (e) {
				        if ($(this)
				            .prop('checked')) {
				            //window.location.href = '?menu=top';
				            localStorage.setItem('sm-setmenu', 'top');
				            location.reload();
				        } else {
				            //window.location.href = '?';
				            localStorage.setItem('sm-setmenu', 'left');
				            location.reload();
				        }
				    });

				if (localStorage.getItem('sm-setmenu') == 'top') {
				    $('#smart-topmenu')
				        .prop('checked', true);
				} else {
				    $('#smart-topmenu')
				        .prop('checked', false);
				}

				/*
				 * INSIDE CONTAINER
				 */
				$('input[type="checkbox"]#smart-fixed-container')
				    .click(function () {
				        if ($(this)
				            .is(':checked')) {
				            //checked
				            $.root_.addClass("container");

				            $('input[type="checkbox"]#smart-fixed-ribbon')
				                .prop('checked', false);
				            $.root_.removeClass("fixed-ribbon");

				            $('input[type="checkbox"]#smart-fixed-navigation')
				                .prop('checked', false);
				            $.root_.removeClass("fixed-navigation");

				            if (smartbgimage) {
				                $("#smart-bgimages")
				                    .append(smartbgimage)
				                    .fadeIn(1000);
				                $("#smart-bgimages img")
				                    .bind("click", function () {
				                        var $this = $(this);
				                        var $html = $('html')
				                        bgurl = ($this.data("htmlbg-url"));
				                        $html.css("background-image", "url(" + bgurl + ")");
				                    })
				                smartbgimage = null;
				            } else {
				                $("#smart-bgimages")
				                    .fadeIn(1000);
				            }

				        } else {
				            //unchecked
				            $.root_.removeClass("container");
				            $("#smart-bgimages")
				                .fadeOut();
				        }
				    });

				/*
				 * REFRESH WIDGET
				 */
				$("#reset-smart-widget")
				    .bind("click", function () {
				        $('#refresh')
				            .click();
				        return false;
				    });

				/*
				 * STYLES
				 */
				$("#smart-styles > a")
				   .on('click', function() {
				        var $this = $(this);
				        var $logo = $("#logo img");
				        $.root_.removeClassPrefix('smart-style')
				            .addClass($this.attr("id"));
				        $logo.attr('src', $this.data("skinlogo"));
				        $("#smart-styles > a #skin-checked")
				            .remove();
				        $this.prepend("<i class='fa fa-check fa-fw' id='skin-checked'></i>");
				    });
			}
		};
	})
	.controller('breadcrumbController', ['$scope', function($scope) {
		$scope.breadcrumbs = [];
		$scope.$on('navItemSelected', function(name, crumbs) {
			$scope.setBreadcrumb(crumbs);
		});

		$scope.setBreadcrumb = function(crumbs) {
			$scope.breadcrumbs = crumbs;
		}
	}])

	.directive('breadcrumb', ['ribbon', 'localize', '$compile', function(ribbon, localize, $compile) {
		return {
			restrict: 'AE',
			controller: 'breadcrumbController',
			replace: true,
			link: function(scope, element, attrs) {
				scope.$watch('breadcrumbs', function(newVal, oldVal) {
					if (newVal !== oldVal) {
						// update DOM
						scope.updateDOM();
					}
				})
				scope.updateDOM = function() {
					element.empty();
					angular.forEach(scope.breadcrumbs, function(crumb) {
						var li = angular.element('<li data-localize="' + crumb + '">' + crumb + '</li>');
						li.text(localize.localizeText(crumb));
						
						$compile(li)(scope);
						element.append(li);
					});
				};
				
				// set the current breadcrumb on load
				scope.setBreadcrumb(ribbon.currentBreadcrumb);
				scope.updateDOM();
			},
			template: '<ol class="breadcrumb"></ol>'
		}
	}])
;