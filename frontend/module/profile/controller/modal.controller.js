
appLibra.controller('modalCtrl', function ($scope, $rootScope, $uibModalInstance, $location, $timeout, SocialLogService, services, cookiesService, userService) {

	$rootScope.formRegister = false;
	$rootScope.formLogin = true;
	$scope.login_form = {
        user: "",
        pass: ""
    };
	

	$scope.viewRegister=function(){
		$rootScope.formRegister = true;
		$rootScope.formLogin = false;	
	};

	$scope.viewLogin=function(){
		$rootScope.formRegister = false;
		$rootScope.formLogin = true;
	};	

	$scope.fbLogin=function(){
		SocialLogService.fbLogin().then(function (datos) {
			if (datos.success) {
				datos.info.tipo_registro="f";
				console.log(datos.info);
				services.post('profile', 'logSocial', datos.info)
		        	.then(function (response) {
		        		cookiesService.SetCredentials(response.datos);
		        		$scope.close();
		        		userService.login();
		        		/*if (response.datos.province==="") {
		        			console.log("yes");
		        		}*/
		        			            
		        	});
		    }else{
		    	console.log("pintar el error fb con toster");
		    }
		});
	}

	$scope.gogLogin=function(){
		SocialLogService.gogLogin().then(function (datos) {
			if (datos.success) {
				datos.info.tipo_registro="g";
				services.post('profile', 'logSocial', datos.info)
		        	.then(function (response) {
		        		cookiesService.SetCredentials(response.datos);
		        		userService.login();
		        		$scope.close();
		        		/*if (response.datos.province==="") {
		        			console.log("yes");
		        		}*/
		        			            
		        	});
		    }else{
		    	console.log("pintar el error gog con toster");
		    }
		});
	}


	$scope.twLogin=function(){
		SocialLogService.twLogin().then(function (datos) {
			if (datos.success) {
				datos.info.tipo_registro="t";
				console.log(datos.info);
				services.post('profile', 'logSocial', datos.info)
		        	.then(function (response) {
		        		cookiesService.SetCredentials(response.datos);
		        		$scope.close();
		        		userService.login();
		        		/*if (response.datos.province==="") {
		        			console.log("yes");
		        		}*/
		        			            
		        	});
		    }else{
		    	console.log("pintar el error tw con toster");
		    }
		});
	}

	$scope.manualLogin=function(valido){
		var data = {
        	"user": $scope.login_form.user, 
        	"pass": $scope.login_form.pass};
	}

	$scope.manualRegister=function(){
		
	}

	/*Cierra modal*/
	$scope.close = function () {
		$uibModalInstance.dismiss('cancel');
	};


});


