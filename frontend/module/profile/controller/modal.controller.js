
appLibra.controller('modalCtrl', function ($scope, $rootScope, $uibModalInstance, $uibModal, $location, $timeout, SocialLogService, services, cookiesService, userService) {

	$rootScope.formRegister = false;
	$rootScope.formLogin = true;
	$scope.login_form = {};
	$scope.register_Form={};


	

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
				/*console.log(datos.info);*/
				services.post('profile', 'logSocial', datos.info)
		        	.then(function (response) {
		        		console.log(response);
		        		cookiesService.SetToken(response.token);
		        		userService.cambiaPerfil(response.datos);
		        		$scope.close();
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
		        		/*console.log(response);*/
		        		cookiesService.SetToken(response.token);
		        		userService.cambiaPerfil(response.datos);
		        		$scope.close();
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
		        		/*console.log(response);*/
		        		cookiesService.SetToken(response.token);
		        		userService.cambiaPerfil(response.datos);
		        		$scope.close();
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
        	"user_log": $scope.login_form.user_log, 
        	"password_log": $scope.login_form.password_log};

        services.post('profile', 'loginManual', data)
        	.then(function (response) {
        		// console.log(response);
	            if (response.success) {
	            	cookiesService.SetToken(response.token);
	        		userService.cambiaPerfil(response.datos);
	        		$scope.close();
		            var toasts = new Toast('Sending email', 'success', 'toast-top-center', response.mensaje, 15000);
		    		delayToasts(toasts,0);
	            } else {
	            	if (response.error.user) {
		            	$scope.login_form.errPass="";
		            	$scope.login_form.errUser=response.error.user;
	            	}
	            	if (response.error.password) {
		            	$scope.login_form.errUser="";
		            	$scope.login_form.errPass=response.error.password;
	            	}
	            }
        	});
	}

	$scope.manualRegister=function(valido){
		var data = {
        	"user_register": $scope.registerForm.user_register, 
        	"email_register": $scope.registerForm.email_register,
        	"password_register": $scope.registerForm.password_register};

        services.post('profile', 'register', data)
        	.then(function (response) {
	            if (response.success) {
	            	console.log(response);
	            	$scope.close();
		            var toasts = new Toast('Register', 'info', 'toast-bottom-full-width', response.mensaje, 15000);
		    		delayToasts(toasts,0);
	            } else {
	            	var toasts = new Toast('Register', 'error', 'toast-top-full-width', response.mensaje, 15000);
	            	delayToasts(toasts,0);
	            }
        	});
	}

	/*Cierra modal*/
	$scope.close = function () {
		$uibModalInstance.dismiss('cancel');
	};

	$scope.openRecovPass = function () {
		$scope.close();
        var modalInstance2 = $uibModal.open({
            animation: 'true',
            templateUrl: 'frontend/module/profile/view/modalRecovPass.html',
            controller: 'ModalRecovPassCtrl',
            size: "md"
        });
    };

});


