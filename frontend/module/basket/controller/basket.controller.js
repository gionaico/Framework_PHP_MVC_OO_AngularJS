
appLibra.controller('BasketCtrl', ['$scope', '$rootScope', 'basketService', 'services', function ($scope, $rootScope, basketService, services) {
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
        console.log("ddd");
        // services.post('basket', 'traerCursosCarrito', "datosinfo")
        //             .then(function (response) {
        //                 console.log(response);
                        
        //             });

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
        console.log(indice);
        $rootScope.carrito.splice(indice, 1);
        console.log($rootScope.carrito.length);
        basketService.pintarTblCarrito($rootScope.carrito.length, $scope);
    }


}]);

