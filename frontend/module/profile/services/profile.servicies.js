appLibra.factory("profileService", ['$q', '$rootScope', 'services', 'CommonService', 'load_selctLocation', function ($q, $rootScope, services, CommonService, load_selctLocation) {

        var service = {};
            service.cargarSelectsLocation = cargarSelectsLocation;
            service.cargarDropzone = cargarDropzone;
            service.cargarDatosUser = cargarDatosUser;
                    
        return service;
        
        function cargarSelectsLocation($scope, datos) {
            load_selctLocation.load_pais()
                .then(function (response) {
                    // console.log(response);
                    if(response.success){
                        $scope.paises = response.datas;
                        /*var paises = response.datas;
                            for (var i = 0 ; i < paises.length; i++) {
                                if (paises[i].sISOCode==datos.country) {
                                    $scope.user.country=paises[i];
                                    console.log($scope.user.country);
                                }
                                // console.log(paises[i].sISOCode);
                            }*/
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
                    // console.log(response);
                    if(response.success){
                        $scope.cities = response.datas;
                    }else{
                        CommonService.alert("error", "Ha habido un problema a la hora de cargar cities", "Cities");
                    }
                });
            };
        }

        function cargarDropzone($scope, datos) {
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
        }


        function cargarDatosUser($scope, datos){
            // console.log(datos);
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
            /*----------------------------------------*/
            if (datos.genere !="") {
                $scope.user.genere=datos.genere;
            }

            
            load_selctLocation.load_pais()
                .then(function (response) {
                    if(response.success){
                        $scope.paises = response.datas;
                        var paises = response.datas;
                        if (datos.country!="") {
                            for (var i = 0 ; i < paises.length; i++) {
                                if (paises[i].sISOCode==datos.country) {
                                    $scope.user.country=paises[i];
                                    console.log($scope.user.country);
                                }
                            }
                            imprimirProvince( datos);
                        }
                    }else{
                        CommonService.alert("error", "Ha habido un problema a la hora de cargar paises", "Paises");
                    }
                });



        
            function imprimirCiudad(datos){
                if ($scope.user.country.sISOCode == 'ES') {
                    // console.log($scope.user.province);
                    var ciudad = {idPoblac: $scope.user.province.id};
                    load_selctLocation.loadPoblacion(ciudad)
                    .then(function (response) {
                        if(response.success){
                            $scope.cities = response.datas;
                            var ciudades = response.datas;
                            for (var i = 0 ; i < ciudades.length; i++) {
                                if (ciudades[i].poblacion==datos.city) {
                                    $scope.user.city=ciudades[i];
                                    console.log($scope.user.city);
                                }
                            }
                        }else{
                            CommonService.alert("error", "Ha habido un problema a la hora de cargar cities", "Cities");
                        }
                    });
                }
            }/*end imprimirCiudad*/


            function imprimirProvince(datos){
                if ($scope.user.country.sISOCode == 'ES') {
                    load_selctLocation.loadProvincia()
                    .then(function (response) {
                        // console.log(response);
                        if(response.success){
                            $scope.provinces = response.datas;
                            var provinces = response.datas;
                            for (var i = 0 ; i < provinces.length; i++) {
                                if (provinces[i].id==datos.province) {
                                    $scope.user.province=provinces[i];
                                    console.log($scope.user.province);
                                }
                            }
                            imprimirCiudad(datos);
                        }else{
                            CommonService.alert("error", "Ha habido un problema a la hora de cargar provinces", "Provinces");
                        }
                    });
                    $scope.cities = null;
                }else{
                    $scope.user.province="";
                    $scope.user.city="";
                }
            }/*end imprimirProvince*/




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
            };/*end resetPais*/

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
            };/*end resetValues*/

            $scope.formatPass=function(){
                CommonService.alertFormatPass();
            }
        }/*end cargarDatosUser*/

}]);
