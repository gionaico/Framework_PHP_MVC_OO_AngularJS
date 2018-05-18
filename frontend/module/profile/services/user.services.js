appLibra.factory("userService", ['$location', '$rootScope', 'services', 'cookiesService',function ($location, $rootScope, services, cookiesService, SocialLogService) {

        var service = {};
            service.login = login;
            service.logout = logout;
        
        return service;

        function login() {
            //al cargarse la pagina por primera vez, user es undefined
            var user = cookiesService.GetCredentials();
            if (user) {
                $rootScope.btnLogin = false;
                $rootScope.btnLogout = true;

                $rootScope.avatar = user.avatar;
                $rootScope.usuario = user.usuario;
                $rootScope.nombre = user.nombre;

                
                /*services.post('events', 'getfavorites', JSON.stringify({usuario: user.usuario})).then(function (response) {
                    $rootScope.userfavorites = response.replace(/['"]+/g, '');
                });*/

                if (user.tipo === "0") {
                    $rootScope.adminV = false;
                } else if (user.tipo === "1") {
                    $rootScope.adminV = true;
                } 

            } else {
                $rootScope.btnLogin = true;
            }
        }

        function logout(authService) {
            // SocialLogService.logout(authService);
            
            cookiesService.ClearCredentials();

            $rootScope.btnLogin = true;

            $rootScope.avatar = '';
            $rootScope.nombre = '';

            $rootScope.adminV = false;

            $rootScope.btnLogout = false;
            $location.path("/");
        }
}]);
