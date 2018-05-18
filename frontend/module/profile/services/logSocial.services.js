
appLibra.factory('SocialLogService', function($q){
	var defered=$q.defer();
    // var promise=defered.promise;
	var service = {};
	    service.fbLogin = fbLogin;
	    service.twLogin = twLogin;
	    service.gogLogin = gogLogin;
	    service.logOut = logOut;

	var info = {};
		info.success=false;
		

	return service;

	function fbLogin(authService){
		var provider = new firebase.auth.FacebookAuthProvider();
		
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

	function twLogin(authService){
		var provider = new firebase.auth.TwitterAuthProvider();
    	authService.signInWithPopup(provider).then(function(result) {              
    		info.info=ArrayRedesSociales(result);
    		return info;
      	}).catch(function(error) {
      		console.log('Se ha encontrado un error:', error);
      	});
	}

	function gogLogin(authService){
		var provider = new firebase.auth.GoogleAuthProvider();
    	provider.addScope('email');

    	authService.signInWithPopup(provider).then(function(result) {
    		info.info=ArrayRedesSociales(result);
    		return info;
        }).catch(function(error) {
            console.log('Se ha encontrado un error:', error);
        });
	}

	function logOut(){
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
