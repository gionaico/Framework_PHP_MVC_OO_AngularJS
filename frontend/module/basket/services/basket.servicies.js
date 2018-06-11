appLibra.factory("basketService", [ 'services', 
function ( services) {
    
    var service = {};
    service.pintarTblCarrito = pintarTblCarrito;

    return service;

    function pintarTblCarrito(cantCursos, $scope) {
        console.log(cantCursos);
        if (cantCursos!=0) {
            $scope.sinProductos=false;
            $scope.tablaCarrito=true;
        }else{
            $scope.sinProductos=true;
            $scope.tablaCarrito=false;
        }
    };
    

}]);