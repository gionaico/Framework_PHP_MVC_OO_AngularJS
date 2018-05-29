appLibra.controller('profileFormCtrl', function ($scope, $rootScope, $location, user, services, CommonService, load_selctLocation, userService, profileService) {
    
    // console.log($scope.user);
    

    if (user.success) {
        $scope.divDrop=false;
        $scope.divAvatar=true;
        $scope.cambioVista=function(){
            if ($scope.divAvatar) {
                $scope.divDrop=true;
                $scope.divAvatar=false;
            } else {
                $scope.divDrop=false;
                $scope.divAvatar=true;
            }
        }
        verificaDatos(user.user);
    }else{
        CommonService.alertTimer("error", "Por favor vuelva a iniciar sesion e intentelo de nuevo", "Fallo de Autentificacion", 5000);
        userService.logout();
    }
    


    $scope.SubmitUpdateProfile = function (valido){
        console.log("entra");
        var p1=$scope.user.pass1;
        var p2=$scope.user.pass2;
        var country=$scope.user.country;
        var city=$scope.user.city;
        var province=$scope.user.province;
        $scope.errores={}
        
        if ((p1!="") || (p2!="")) {
            var pass1 =document.getElementById('pass1');
            if (p1!=p2) {
                $scope.errores.pass="has-error";
                console.log($scope.errores.pass);
                pass1.focus();
                return CommonService.alert("error", "Si desea cambiar de password, porfavor rellene los dos campos con el mismo password", "No coinciden password");
            }
        }

        if (country!="") {
            if ((country.sISOCode=="ES") && (province=="")) {
                var elProvince =document.getElementById('province');
                $scope.errores.province="has-error";
                elProvince.focus();
                return CommonService.alert("error", "Es nesesario especificar provincia", "Fallo localizacion");
            }

            if ((city=="") && (province!="")) {
                var elCity =document.getElementById('city');
                $scope.errores.city="has-error";
                elCity.focus();
                return CommonService.alert("error", "Es nesesario especificar ciudad", "Fallo localizacion");
            }
        }

        var datos={datosNew: $scope.user, datosOld:user.user}
        services.post('profile', 'updateUser', datos)
            .then(function (response) {
                console.log(response);
            });

    }

    

    function verificaDatos(datos){
        profileService.cargarDatosUser($scope, datos);
        profileService.cargarDropzone($scope, datos);

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
                            $scope.cambioVista();
                            CommonService.alert("success", response.mensaje, "AVATAR");
                        });
                }
            }
        }
  



    } /*end verificaDatos*/
});

