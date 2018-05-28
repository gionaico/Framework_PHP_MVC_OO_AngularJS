appLibra.controller('profileFormCtrl', function ($scope, $rootScope, $location, user, services, CommonService, load_selctLocation, userService) {
    
    // console.log($scope.user);
    

    if (user.success) {
        verificaDatos(user.user);
    }else{
        CommonService.alertTimer("error", "Por favor vuelva a iniciar sesion e intentelo de nuevo", "Fallo de Autentificacion", 5000);
        userService.logout();
    }
    
    $scope.formatPass=function(){
        CommonService.alertFormatPass();
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
        console.log(datos);
        $scope.user={
            genere      : "",
            country     : "",
            province    : "",
            city        : "",
            phone       : "",
            pass1       : "",
            pass2       : ""
        };

        $scope.user.email=datos.email;
        $scope.user.register_date= datos.register_date;        
        var rutaAva=datos.avatar;
        var province=$scope.user.province;
        $scope.errores={};



        /*$scope.user.name="";
        $scope.user.phone="";*/
        /*var fecha=new Date();

        $scope.CurrentDate =new Date();
        $scope.Femin = fecha.setDate(fecha.getDate()-(18*365));
        $scope.Femax = fecha.setDate(fecha.getDate()-(100*365));
        console.log($scope.Femax);*/
        

        if (datos.birth_date !="0000-00-00") {
            $scope.user.birth_date=new Date(datos.birth_date);
        }else{
            $scope.user.birth_date= new Date();
        }
        /*----------------------------------------*/
        if (datos.name !="") {
            $scope.user.name=datos.name;
        }
        /*----------------------------------------*/
        if (datos.phone !="0") {
            $scope.user.phone=datos.phone;
        }
        /*----------------------------------------*/
        if (datos.tipo_registro =="m") {
            $scope.user.username=datos.user_name;
        }
        /*----------------------------------------*/
        if (rutaAva.substring(0, 4)==="http") {
            $rootScope.avatar=datos.avatar;
        }else{
            $rootScope.avatar="backend/"+datos.avatar;
        }



        // console.log($scope.user);
        //dropzone.
        $scope.datosSubidaFoto=[];
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
                    /*console.log(response);
                    console.log(file.xhr.response);
                    console.log(respuesta);*/
                    var respuesta=angular.fromJson(response);
                    $scope.datosSubidaFoto=respuesta;
                },
                'removedfile': function (file, serverFileName) {
                    /*console.log(file);
                    console.log(file.xhr.response);
                    console.log(angular.fromJson(file.xhr.response));*/
                }
        }};
        
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
  

        /*Carga paises*/
        load_selctLocation.load_pais()
            .then(function (response) {
                /*console.log(response);*/
                if(response.success){
                    $scope.paises = response.datas;
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

   /* function cambio(){
        if ($scope.divAvatar) {
            $scope.divDrop=true;
            $scope.divAvatar=false;
        } else {
            $scope.divDrop=false;
            $scope.divAvatar=true;
        }
    }*/