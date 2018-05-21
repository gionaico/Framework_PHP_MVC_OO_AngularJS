appLibra.controller('changePassCtrl', function ($scope, $route, $uibModal, $rootScope, $location, userService, services, cookiesService, CommonService) {
	var token = $route.current.params.token;
    console.log(token);
    $scope.datosChangPass={};
    $scope.datosChangPass.difere=false;

    $scope.formatPass=function(){
    	CommonService.alertInfo("tetvdgvjjd");
    }

    $scope.changePassw=function(valido){
    	var pass={
    		password : $scope.datosChangPass.password_nuevo,
    		pass2 : $scope.datosChangPass.password_nuevo2
    	}
    	pass.token=$route.current.params.token;

    	console.log(pass);
    	if (pass.password!=pass.pass2) {
    		$scope.datosChangPass={};
			$scope.datosChangPass.difere=true;
			return false;
    	}

	    services.post("profile", "upDatePass", pass).then(function (response) {
	       	if (response.success) {
	       		CommonService.alertError(response.mensaje);
	       		console.log(response.mensaje);
	       	}else{
				console.log("error"); 
	       	}
	    });

    };


});