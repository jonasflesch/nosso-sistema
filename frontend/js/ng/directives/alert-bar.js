angular.module('nossoSistema.validation', [])

	.directive('nsAlertBar', function(localize) {
		return {
			restrict: 'E',
			templateUrl: 'views/common/alert-bar.html'
		}
	})
;