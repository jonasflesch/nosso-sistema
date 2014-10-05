nossoSistemaApp.controller('LangController', ['$scope', 'settings', 'localize', function($scope, settings, localize) {
	$scope.languages = settings.languages;
	$scope.currentLang = settings.currentLang;
	$scope.setLang = function(lang) {
		settings.currentLang = lang;
		$scope.currentLang = lang;
		localize.setLang(lang);
	}

	// set the default language
	$scope.setLang($scope.currentLang);

}])