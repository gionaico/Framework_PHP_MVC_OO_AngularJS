appLibra.controller('panelAdministracionCtrl', ['$scope', '$route', '$uibModal', '$rootScope', '$location',  '$aside', 'services', 'CommonService', 'datosPerfil', 'userService', function ($scope, $route, $uibModal, $rootScope, $location,  $aside,  services, CommonService, datosPerfil, userService) {

    console.log(datosPerfil);
    if (!datosPerfil.success) {
        CommonService.alert("error", "Fallo de autentificacion de usuario", "IDENTIFICACION");
        userService.logout();
    }else{
        if (!datosPerfil.cargaDatos) {
            CommonService.alert("error", datosPerfil.mensaje, "Carga de datos");
        }else{
            $scope.user=datosPerfil.user ;
            $scope.compras=datosPerfil.compras ;
            $scope.cursosConLike=datosPerfil.cursosConLike ;
            $scope.cursosComentados=datosPerfil.cursosComentados ;
            $scope.cursosPuntuados=datosPerfil.cursosPuntuados ;
        }
    }




    $scope.tabs = [
        { title:'Ver datos personales', content:"frontend/module/profile/view/view_panelControl/datosPersonales.html", index:0 },
        { title:'Ver mis compras', content:'frontend/module/profile/view/view_panelControl/comprasUser.html', disabled: true },
        { title:'Ver cursos con LIKE', content:'frontend/module/profile/view/view_panelControl/likesUser.html', disabled: true },
        { title:'Ver mis comentarios', content:'frontend/module/profile/view/view_panelControl/comentariosUser.html', disabled: true },
        { title:'cursos puntuados', content:'frontend/module/profile/view/view_panelControl/cursosPuntuados.html', disabled: true }
    ];


}]);

































/*
    $scope.asideState = {
        open: false
    };

    $scope.openAside = function(position, backdrop) {
        $scope.asideState = {
          open: true,
          position: position
        };

        function postClose() {
          $scope.asideState.open = false;
        }

        $aside.open({
          templateUrl: 'frontend/module/profile/view/aside_PanelAdministracion.html',
          placement: position,
          size: 'sm',
          backdrop: backdrop,
          controller: 'aside_panelAdministracionCtrl'
        }).result.then(postClose, postClose);
    }

appLibra.controller('aside_panelAdministracionCtrl',[ '$scope', '$route', '$uibModal', '$rootScope', '$location',  '$uibModalInstance', '$aside', 'services', 'CommonService', function ($scope, $route, $uibModal, $rootScope, $location, $uibModalInstance, $aside,  services, CommonService) {

    $scope.ok = function(e) {
      $uibModalInstance.close();
      // $uibModalInstance.dismiss('cancel');
      console.log("sddsfs");
      e.stopPropagation();
    };

    $scope.cancel = function(e) {
        console.log("999999");
      $uibModalInstance.dismiss();
      e.stopPropagation();
    };

    $scope.opcionMenu=function(opcion){
        console.log(opcion);
    };

}]);*/

