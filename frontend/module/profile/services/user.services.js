appLibra.factory("userService", ['$location', '$rootScope', '$q', 'services', 'cookiesService', 'SocialLogService',function ($location, $rootScope, $q, services, cookiesService, SocialLogService) {

        var service = {};
            service.login = login;
            service.logout = logout;
            service.cambiaPerfil = cambiaPerfil;
        
        return service;


        function login() {
            var datos= cookiesService.GetToken();
            /*console.log(datos);*/
            if (datos.success) {
                /*al cargarse la pagina por primera vez, user es undefined*/
                if (datos.token) {
                    /*console.log("existe");*/
                    var tokenGuardado=datos.token;

                    console.log(tokenGuardado);
                    services.post('profile', 'compruebaToken',  {token: tokenGuardado})
                        .then(function (response) {
                            console.log(response);
                            if (response.success) {
                                $rootScope.btnLogin = false;
                                $rootScope.btnLogout = true;
                                $rootScope.avatar = response.user.avatar;
                                $rootScope.usuario = response.user.user;
                                var tipo_registro = response.user.tipo_registro;

                                if ((response.user.name==="")&&(tipo_registro==="m")) {
                                    $rootScope.nombre = response.user.user;
                                }else{
                                    $rootScope.nombre = response.user.name;
                                }

                                if (response.user.type === "0") {
                                    $rootScope.adminV = false;
                                } else if (response.user.type === "1") {
                                    $rootScope.adminV = true;
                                } 
                            }else{
                                console.log(reponse.mensaje);
                            }
                        }).catch(function(err) {
                            console.log(err);
                            console.log("error en peticion con servidor");
                        });


                }else{
                    
                    $rootScope.btnLogin = true;
                    console.log("no existe token en cookies");
                }
                /*services.post('events', 'getfavorites', JSON.stringify({usuario: user.usuario})).then(function (response) {
                    $rootScope.userfavorites = response.replace(/['"]+/g, '');
                });*/
            } else {
                cookiesService.ClearToken();
                $rootScope.btnLogin = true;
                $location.path("/");
                console.log("envia mensaje de seguridad con alert y redirige a home");
            }
        }/*end func login*/

        function cambiaPerfil(datos){
            /*console.log(datos);*/
            $rootScope.btnLogin = false;
            $rootScope.btnLogout = true;
            $rootScope.avatar = datos.avatar;
            $rootScope.usuario = datos.user;
            var tipo_registro = datos.tipo_registro;

            if ((datos.name==="")&&(tipo_registro==="m")) {
                $rootScope.nombre = datos.user;
            }else{
                $rootScope.nombre = datos.name;
            }

            if (datos.type === "0") {
                $rootScope.adminV = false;
            } else if (datos.type === "1") {
                $rootScope.adminV = true;
            } 
        }


        function logout() {
            SocialLogService.logout();
            cookiesService.ClearToken();
            // cookiesService.ClearCredentials();

            $rootScope.btnLogin = true;

            $rootScope.avatar = '';
            $rootScope.nombre = '';

            $rootScope.adminV = false;

            $rootScope.btnLogout = false;
            $location.path("/");
        }
}]);
