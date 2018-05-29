appLibra.controller('profileFormCtrl', function ($scope, $rootScope, $uibModal, user, services, CommonService, userService, profileService) {
    
    // console.log($scope.user);
    

    if (!user.success) {
        CommonService.alertTimer("error", "Por favor vuelva a iniciar sesion e intentelo de nuevo", "Fallo de Autentificacion", 5000);
        userService.logout();
    }

    /*Llamada a servicios*/
    profileService.divsAvatarDropzone($scope);
    profileService.cargarDatosUser($scope, user.user);
    profileService.cargarDropzone($scope, user.user);


    $scope.SubmitUpdateProfile = function (valido){
        profileService.validacionFormulario($scope);
        var datos={datosNew: $scope.user, datosOld:user.user}
        services.post('profile', 'updateUser', datos)
            .then(function (response) {
                profileService.pintaErroresPhp($scope, response);
            });
    }

    

    $scope.guardarFoto=function(){
        var datosAvatar=$scope.datosSubidaFoto;
        datosAvatar.user=user.user.user_name;
        if (datosAvatar.length==0) {
            CommonService.alert("error", "No hay nueva foto seleccionada, o la foto elegida ya ha sido subida y cambiada", "Error cambio de Imagen");
        }else{
            if (datosAvatar.error.length!=0) {
                $scope.erroresDZ=datosAvatar.error;
            }else{
                console.log($scope.datosSubidaFoto);
                $scope.erroresDZ=[];
                services.post('profile', 'guardar_avatar', datosAvatar)
                    .then(function (response) {
                        console.log(response);
                        $scope.datosSubidaFoto=[];
                        $rootScope.avatar="backend/"+response.avatar;
                        $scope.user.avatar="backend/"+response.avatar;
                        $scope.cambioVista();
                        CommonService.alert("success", response.mensaje, "AVATAR");
                    });
            }
        }
    }

    
});
