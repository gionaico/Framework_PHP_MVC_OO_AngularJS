console.log("dddddd");
appLibra.controller('verifyTokenCtrl', function ($scope, $route, $uibModal, $rootScope, $location, userService, services, cookiesService) {
	var token = $route.current.params.token;
    console.log(token);

    services.get("profile", "activar", token).then(function (response) {
        cookiesService.SetCredentials(response.datos);
        userService.login();
        var toasts = new Toast('Cuenta activada Exitosamente', 'success', 'toast-top-center', "Bienvenido a Libra LearnEasy", 15000);
        delayToasts(toasts,0);
        $location.path("/");
    });

});