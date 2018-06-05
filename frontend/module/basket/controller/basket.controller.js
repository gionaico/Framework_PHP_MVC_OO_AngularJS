
appLibra.controller('BasketCtrl', ['$scope', '$rootScope', 'basketService', function ($scope, $rootScope, basketService) {
    $scope.sinProductos=true;
    $scope.tablaCarrito=false;
    console.log($rootScope.carrito.length);
    basketService.pintarTblCarrito($rootScope.carrito.length, $scope);
    // if ($rootScope.carrito.lenght!=0) {
    //     $scope.sinProductos=false;
    //     $scope.tablaCarrito=true;
    // } 

    console.log($rootScope.carrito);
    
    
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