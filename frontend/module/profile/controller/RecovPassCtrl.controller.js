appLibra.controller('ModalRecovPassCtrl', function ($scope, $uibModal, $uibModalInstance,  services) {
    $scope.recPass={};
    $scope.recPass.iguales=false;			
    $scope.recPass.Show_msnDB=false;

    $scope.close = function () {
		$uibModalInstance.dismiss('cancel');
	};

	$scope.RecovPassw = function(valido){
		var email={
			email1: $scope.recPass.email1,
			email2: $scope.recPass.email2};

		if (email.email1!=email.email2) {
			$scope.recPass.iguales=true;			
			return false;
		}
		$scope.recPass.iguales=false;

		console.log(email);
	    services.post("profile", "recovPass", email).then(function (response) {
	        console.log(response);
	        if (!response.success) {
	        	$scope.recPass.Show_msnDB=true;
	        	$scope.recPass.msnDB=response.mensaje;
	        }
	        
	    });

	};
});