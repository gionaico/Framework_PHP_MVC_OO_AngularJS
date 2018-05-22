appLibra.controller('profileFormCtrl', function ($scope, $location, user, CommonService, load_selctLocation) {
    $scope.user={};
    // console.log(user);
    if (user.success) {
        $scope.user={
            email : user.user.email,
            register_date: user.user.register_date
        }
        verificaDatos(user.user)
    }else{
        CommonService.alert("error", user.mensaje, "Fallo de conexion");
        $location.path("/");
    }

    $scope.SubmitUpdateProfile = function (valido){

    }

    function verificaDatos(datos){
        // console.log(datos);
        var rutaAva=datos.avatar;

        if (datos.birth_date !="0000-00-00") {
            $scope.user.birth_date=datos.birth_date;
        }
        if (datos.name !="") {
            $scope.user.name=datos.name;
        }
        if (datos.phone !="0") {
            $scope.user.phone=datos.phone;
        }
        if (datos.tipo_registro =="m") {
            $scope.user.username=datos.user_name;
        }
        if (rutaAva.substring(0, 4)==="http") {
            $scope.user.avatar=datos.avatar;
        }else{
            $scope.user.avatar="backend/"+datos.avatar;
        }

        /*Carga paises*/
        load_selctLocation.load_pais()
            .then(function (response) {
                if(response.success){
                    $scope.user.paises = response.datas;
                    console.log(response);
                }else{
                    console.log("error");
                }
            });

    }
});