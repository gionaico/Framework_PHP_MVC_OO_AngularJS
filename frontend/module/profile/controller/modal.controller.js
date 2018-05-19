
appLibra.controller('modalCtrl', function ($scope, $uibModalInstance, $location, $timeout, SocialLogService, services, cookiesService, userService) {

	

	$scope.fbLogin=function(){
		SocialLogService.fbLogin().then(function (datos) {
			if (datos.success) {
				datos.info.tipo_registro="f";
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
		        		$scope.close();
		        		userService.login();
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



	/*Cierra modal*/
	$scope.close = function () {
		$uibModalInstance.dismiss('cancel');
	};


});


