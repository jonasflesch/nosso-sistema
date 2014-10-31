nossoSistemaApp.controller('OleoReceberCarroController', ['$scope', '$http', function($scope, $http) {

	$scope.steps = ["INFORMAR_PLACA", "VEICULO", "PROPRIETARIO", "TROCA", "CONFIRMACAO"];

	$scope.trocaFiltro = '1';

	$scope.activeStep = 'INFORMAR_PLACA';

	$scope.troca = {};

	$scope.nextStepInformarPlaca = function(){
		$http.get('http://localhost:8080/oleo/findCarroByCdPlaca/' + $scope.troca.placa).
			success(function(data) {
			    if(data == ''){
			    	$scope.activeStep = $scope.steps[$scope.steps.indexOf('VEICULO')];
			    } else {
			    	$scope.activeStep = $scope.steps[$scope.steps.indexOf('TROCA')];
			    	return false;
			    }
			});
	};

	$scope.lastStep = function(){
		return $scope.steps.indexOf($scope.activeStep) == $scope.steps.length - 1;
	};

	$scope.firstStep = function(){
		return $scope.steps.indexOf($scope.activeStep) == 0;
	};

	$scope.nextStep = function(){
		if(!$scope.lastStep()){
			$scope.alerts.length = 0;
			if($scope.activeStep = 'INFORMAR_PLACA'){
				$scope.nextStepInformarPlaca();
			} else {
				$scope.activeStep = $scope.steps[$scope.steps.indexOf($scope.activeStep) + 1];
			}
		}
	};

	$scope.previousStep = function(){
		if(!$scope.firstStep()){
			$scope.alerts.length = 0;
			$scope.activeStep = $scope.steps[$scope.steps.indexOf($scope.activeStep) - 1];
		}
	};
	
}]);