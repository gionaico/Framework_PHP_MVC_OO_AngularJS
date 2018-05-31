
appLibra.factory('SocialLogService', function($q){
	
    // var promise=defered.promise;
	var service = {};
	    service.fbLogin = fbLogin;
	    service.twLogin = twLogin;
	    service.gogLogin = gogLogin;
	    service.logout = logout;

	var info = {};
		info.success=false;

	/*CONFIGURACION FIREBASE*/
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

	return service;

	


	function fbLogin(){
		var defered=$q.defer();
		var provider = new firebase.auth.FacebookAuthProvider();

		var promise = 
			authService.signInWithPopup(provider).then(function(result) {
				info.success=true;
				info.info=ArrayRedesSociales(result);
				// console.log(info.info);
				defered.resolve(info);
	        }).catch(function(err) {
	        	info.error=err;
	        	defered.reject(info);
	      	});
	        // console.log(defered.promise);
		return defered.promise;
	}

	function twLogin(){
		var defered=$q.defer();
		var provider = new firebase.auth.TwitterAuthProvider();
		var promise =
	    	authService.signInWithPopup(provider).then(function(result) {
	    		info.success=true;
				info.info=ArrayRedesSociales(result);
	    		// console.log(info.info);
				defered.resolve(info);
	      	}).catch(function(err) {
	      		info.error=err;
	        	defered.reject(info);
	      	});
	      	// console.log(defered.promise);
		return defered.promise;
	}

	function gogLogin(){
		var defered=$q.defer();
		var provider = new firebase.auth.GoogleAuthProvider();
    	provider.addScope('email');
    	var promise =
	    	authService.signInWithPopup(provider).then(function(result) {
	    		info.success=true;
				info.info=ArrayRedesSociales(result);
				defered.resolve(info);
	        }).catch(function(err) {
	      		info.error=err;
	        	defered.reject(info);
	      	});
	    return defered.promise;
	}

	function logout(){
		authService.signOut();
		console.log("cierre");
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
});
