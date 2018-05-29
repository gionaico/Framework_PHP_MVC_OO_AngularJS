
appLibra.controller('adminUsersCtrl', function($scope, $timeout, usuario, CommonService, userService) {
    console.log(usuario);

    if (usuario.success) {
        
        $scope.fileUsuarios = usuario.usuarios;
        $scope.current_grid = 1;
        $scope.data_limit = 3;
        $scope.filter_data = $scope.fileUsuarios.length;
        $scope.entire_user = $scope.fileUsuarios.length;
            console.log($scope.fileUsuarios);
        console.log($scope.current_grid);
        console.log($scope.data_limit);
        console.log($scope.filter_data);
        console.log($scope.entire_user);

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