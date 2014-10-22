angular.module('nossoSistema.validation', [])

	.directive('nsValidationStyle', function(localize) {
		return {
			restrict: 'A',
			scope: {
				inputField: '=nsValidationStyle'
			},
			link: function(scope, element, attrs) {
				scope.$watch('[inputField.$valid,inputField.$dirty]', function(newValues, oldValues) {
					if(scope.inputField.$dirty){
						if(scope.inputField.$valid){
							element.addClass('has-success');
							element.removeClass('has-error');
						} else {
							element.removeClass('has-success');
							element.addClass('has-error');
						}
					}
				})
			}
		}
	})
;