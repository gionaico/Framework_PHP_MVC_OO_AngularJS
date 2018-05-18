
appLibra.controller('modalCtrl', function ($scope, $uibModalInstance, $location, $timeout, SocialLogService, services, cookiesService, userService) {

	var config = {
		apiKey: "AIzaSyAbhJKdbaDvpEDHh8rJBeJTVw8OgbKvcEA",
		authDomain: "libralearn-easyangularjs.firebaseapp.com",
		databaseURL: "https://libralearn-easyangularjs.firebaseio.com",
		projectId: "libralearn-easyangularjs",
		storageBucket: "libralearn-easyangularjs.appspot.com",
		messagingSenderId: "760092275449"
	};

	firebase.initializeApp(config);
	var authService = firebase.auth();

	$scope.fbLogin=function(){
		SocialLogService.fbLogin(authService).then(function (datos) {
			if (datos.success) {
				datos.info.tipo_registro="f";
				services.post('profile', 'logSocial', datos.info)
		        	.then(function (response) {
		        		cookiesService.SetCredentials(response.datos);
		        		$scope.close();
		        		/*if (response.datos.province==="") {
		        			console.log("yes");
		        		}*/
		        			            
		        	});
		    }else{
		    	console.log("pintar el error con toster");
		    }
		});
	}

	$scope.twLogin=function(){
		SocialLogService.twLogin(authService);
	}

	$scope.gogLogin=function(){
		SocialLogService.gogLogin(authService);
	}

	$scope.close = function () {
		$uibModalInstance.dismiss('cancel');
	};

	// SocialLogService.logout();

});


