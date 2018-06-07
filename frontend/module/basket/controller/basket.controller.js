
appLibra.controller('BasketCtrl', ['$scope', '$rootScope', 'basketService', 'services', 'CommonService', 'cookiesService','userService', function ($scope, $rootScope, basketService, services, CommonService, cookiesService, userService) {
    $scope.sinProductos=true;
    $scope.tablaCarrito=false;
    console.log($rootScope.carrito.length);
    basketService.pintarTblCarrito($rootScope.carrito.length, $scope);
  

    console.log($rootScope.carrito);
    // services.post('basket', 'traerCursosCarrito', "datosinfo")
    //                 .then(function (response) {
    //                     console.log(response);
                        
    //                 });
    $scope.pagar=function(){
        console.log($rootScope.carrito);
        var datosToken = cookiesService.GetToken();
        if ((datosToken.success) && (datosToken.token!=undefined)){
            var datos={ 
                    cursosCarro:$rootScope.carrito,
                    token: datosToken.token    
                    };

            services.post('basket', 'comprar', datos )
                .then(function (response) {
                    console.log(response);
                    
                });
            
        }else{
            CommonService.alertTimer("error", "Por favor vuelva a iniciar sesion e intentelo de nuevo", "Fallo de Autentificacion", 5000);
            userService.logout();
        }



    }
    
    $scope.formatoMoneda = function(valor){
        var valor = parseFloat(valor);
        return Math.floor(valor) + "." + (valor * 100) % 100 + " € " ;
    }

    $scope.borrarDeCarrito=function(id){
        console.log(id);
        for (var i = 0; i < $rootScope.carrito.length; i++) {
            console.log();
            if ($rootScope.carrito[i].Producto.id == id) {
                var indice = i;
            }
        }
        $rootScope.carrito.splice(indice, 1);
        console.log($rootScope.carrito.length);

        CommonService.updateCarritoLocStor($rootScope.carrito);

        basketService.pintarTblCarrito($rootScope.carrito.length, $scope);
    }


}]);

