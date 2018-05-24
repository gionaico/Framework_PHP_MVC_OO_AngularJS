appLibra.controller('profileFormCtrl', function ($scope, $location, user, CommonService, load_selctLocation, userService) {
    $scope.user={};
    /*console.log(user);*/

    if (user.success) {
        $scope.user={
            email : user.user.email,
            register_date: user.user.register_date
        }
        verificaDatos(user.user);
    }else{
        CommonService.alertTimer("error", "Por favor vuelva a iniciar sesion e intentelo de nuevo", "Fallo de Autentificacion", 5000);
        userService.logout();
    }

    $scope.SubmitUpdateProfile = function (valido){

    }

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
        
        //dropzone
        $scope.dropzoneConfig = {
            'options': {
                'url': 'backend/index.php?module=profile&function=upload_avatar&user='+datos.user_name,
                addRemoveLinks: true,
                maxFileSize: 1000,
                dictResponseError: "Ha ocurrido un error en el server",
                acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd'
            },
            'eventHandlers': {
                'sending': function (file, formData, xhr) {},
                'success': function (file, response) {
                    console.log(response);
                    console.log(file.xhr.response);
                    /*montar una funcion que imprima los errores que vienen del backend*/
                },
                'removedfile': function (file, serverFileName) {
                    console.log(file);
                    console.log(file.xhr.response);
                    console.log(angular.fromJson(file.xhr.response));
                    var respuesta=angular.fromJson(file.xhr.response);
                    if (respuesta.error=="") {
                        console.log("funcion de borrado enviando la carpeta donde buscar el archivo y la ruta");
                    } else {}
                }
        }};
        
        

        /*Carga paises*/
        load_selctLocation.load_pais()
            .then(function (response) {
                /*console.log(response);*/
                if(response.success){
                    $scope.user.paises = response.datas;
                }else{
                    CommonService.alert("error", "Ha habido un problema a la hora de cargar paises", "Paises");
                }
            });

        $scope.resetPais = function () {
            if ($scope.user.country.sISOCode == 'ES') {
                load_selctLocation.loadProvincia()
                .then(function (response) {
                    // console.log(response);
                    if(response.success){
                        $scope.provinces = response.datas;
                    }else{
                        CommonService.alert("error", "Ha habido un problema a la hora de cargar provinces", "Provinces");
                    }
                });
                $scope.cities = null;
            }else{
                $scope.user.province="";
                $scope.user.city="";
            }
        };


        $scope.resetValues = function () {
            var datos = {idPoblac: $scope.user.province.id};
            load_selctLocation.loadPoblacion(datos)
            .then(function (response) {
                console.log(response);
                if(response.success){
                    $scope.cities = response.datas;
                }else{
                    CommonService.alert("error", "Ha habido un problema a la hora de cargar cities", "Cities");
                }
            });
        };


    } /*end verificaDatos*/
});