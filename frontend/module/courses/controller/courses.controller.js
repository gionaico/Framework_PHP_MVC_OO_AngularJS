console.log("courseController");

appLibra.controller('coursesCategoryCtrl', function ($scope, $timeout, services, coursesCategory) {
    window.scrollTo(0, 0);
    /*Categoria que viene por ulr*/
    var category=coursesCategory.category;
    /*todos los cursos de la db*/
    var datos=coursesCategory.datos;
    /*Mensaje cuando no hay datos a mostrar*/
    $scope.sinDatos=false;
    var array=[];
        
	if (category!=" ") {
        for (var i =0; i<datos.length; i++) {
            if (datos[i].subject==category) 
                array.push(datos[i]);
        }
    } else {
        array=coursesCategory.datos;
    }

    $scope.file = array;
    $scope.current_grid = 1;
    $scope.data_limit = 3;
    $scope.filter_data = $scope.file.length;
    $scope.entire_user = $scope.file.length;

    $scope.page_position = function(page_number){
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


});

appLibra.filter('beginning_data', function() {
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