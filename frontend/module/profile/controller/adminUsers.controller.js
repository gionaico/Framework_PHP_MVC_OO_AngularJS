
appLibra.controller('adminUsersCtrl', function($scope, $timeout, usuario, CommonService, userService) {
    console.log(usuario);

    if (usuario.success) {
        
        $scope.fileUsuarios = usuario.usuarios;
        $scope.current_grid = 1;
        $scope.data_limit = 3;
        $scope.filter_data = $scope.fileUsuarios.length;
        $scope.entire_user = $scope.fileUsuarios.length;
        //     console.log($scope.fileUsuarios);
        // console.log($scope.current_grid);
        // console.log($scope.data_limit);
        // console.log($scope.filter_data);
        // console.log($scope.entire_user);

        $scope.page_position = function(page_number) {
            $scope.current_grid = page_number;
        };
        $scope.filter = function() {
            $timeout(function() {
                $scope.filter_data = $scope.searched.length;
            }, 20);
        };
        $scope.sort_with = function(base) {
            $scope.base = base;
            $scope.reverse = !$scope.reverse;
        };
        
        
    }else{
        if (usuario.length==1) {
            CommonService.alert("error", "Por favor vuelva a iniciar sesion e intentelo de nuevo", "Fallo de Autentificacion");
        }else{
            CommonService.alert("error", usuario.mensaje, "Error");
        }
        userService.logout();
    }




 
});

appLibra.filter('beginning_data2', function() {
    return function(input, begin) {
    console.log(input);
    console.log(begin);
    if (input) {
        console.log("yeeeeee");
        begin = +begin;
        return input.slice(begin);
    }
    return [];
    }
});



appLibra.controller('updateUserCtrl', function($scope, $timeout, datosUsuario, CommonService, userService, profileService, services) {
    console.log(datosUsuario);

    if (datosUsuario.success) {
        
    }else{
        CommonService.alertTimer("error", "Por favor vuelva a iniciar sesion e intentelo de nuevo", "Fallo de Autentificacion", 5000);
        userService.logout();
    }
    
    profileService.cargarDropzone($scope, datosUsuario.usuario);
    profileService.cargarDatosUser($scope, datosUsuario.usuario);
    profileService.divsAvatarDropzone($scope);

    $scope.SubmitUpdateProfile = function (valido){
        profileService.validacionFormulario($scope);
        var datos={datosNew: $scope.user, datosOld:datosUsuario.usuario}
        services.post('profile', 'updateUser', datos)
            .then(function (response) {
                console.log(response);
                profileService.pintaErroresPhp($scope, response);
            });
    }

    $scope.guardarFoto=function(){
        var datosAvatar=$scope.datosSubidaFoto;
        datosAvatar.user=datosUsuario.usuario.user_name;
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
                        $scope.user.avatar="backend/"+response.avatar;
                        $scope.cambioVista();
                        CommonService.alert("success", response.mensaje, "AVATAR");
                    });
            }
        }
    }

 
});