// appLibra.controller("LoginSocialCtrl", function($scope, $firebaseObject) {
// 	var ref = new Firebase("https://libralearn-easyangularjs.firebaseio.com");
// 	$scope.data = $firebaseObject(ref);
// 	console.log($scope.data);

// 	console.log("socila");

// 	var auth = $firebaseAuth(ref);
	
	
// 	$scope.logFaceb=function{
// 		auth.$authWithOAuthPopup("facebook").then(function(authData) {
// 			console.log("Logged in as:", authData.uid);
// 		}).catch(function(error) {
// 			console.log("Authentication failed:", error);
// 		});
// 	}	

// 	$scope.logGoogle=function{		
// 		var provider = new firebase.auth.GoogleAuthProvider();
// 		provider.addScope('email');
// 		authService.signInWithPopup(provider).then(function(result) {
// 			console.log(result);
// 	        var datos=ArrayRedesSociales(result);

// 	    }).catch(function(error) {
// 	        console.log('Se ha encontrado un error:', error);
// 	    });
// 	}
// });
/*appLibra.controller('LoginSocialCtrl', function($scope, SocialLogService){
	$scope.fb_login=SocialLogService.fb_login;
	
    
});

appLibra.factory('SocialLogService', function(){
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

		// console.log("yeyeyey");

		var service = {};
		    service.fb_login = fb_login;
		    service.tw_login = tw_login;
		    service.logout = logout;


		return service;

		function fb_login(){
			var provider = new firebase.auth.FacebookAuthProvider();
	        authService.signInWithPopup(provider).then(function(result) {
	            var datos=ArrayRedesSociales(result);
				datos.tipo_registro="f";
				console.log(datos);
	        }).catch(function(error) {
	            console.log('Detectado un error:', error);
	        });
		}

		function ArrayRedesSociales(datos){
			var datos={
						"name": datos.user.displayName,
						"email": datos.user.email,
						"user": datos.user.uid,
						"avatar": datos.user.photoURL
						};
			return datos;
		}
});*/