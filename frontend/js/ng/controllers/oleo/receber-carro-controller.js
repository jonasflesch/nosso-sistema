nossoSistemaApp.controller('OleoReceberCarroController', ['$scope', function($scope) {

	$scope.steps = ["INFORMAR_PLACA", "VEICULO", "PROPRIETARIO", "TROCA", "CONFIRMACAO"];

	$scope.trocaFiltro = '1';

	$scope.activeStep = 'INFORMAR_PLACA';

	$scope.troca = {};

	$scope.lastStep = function(){
		return $scope.steps.indexOf($scope.activeStep) == $scope.steps.length - 1;
	};

	$scope.firstStep = function(){
		return $scope.steps.indexOf($scope.activeStep) == 0;
	};

	$scope.nextStep = function(){
		if(!$scope.lastStep()){
			$scope.activeStep = $scope.steps[$scope.steps.indexOf($scope.activeStep) + 1];
		}
	};

	$scope.previousStep = function(){
		if(!$scope.firstStep()){
			$scope.activeStep = $scope.steps[$scope.steps.indexOf($scope.activeStep) - 1];
		}
	};
	
}]);