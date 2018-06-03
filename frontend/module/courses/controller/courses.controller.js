
appLibra.controller('coursesCategoryCtrl', ['$rootScope', '$scope', '$timeout', 'services', '$uibModal', 'coursesCategory', 'courses_map', 'CommonService',function ($rootScope, $scope, $timeout, services, $uibModal, coursesCategory, courses_map, CommonService) {
    window.scrollTo(0, 0);
    /*Categoria que viene por ulr*/
    var category=coursesCategory.category;
    /*todos los cursos de la db*/
    var datos=coursesCategory.datos;
    /*Mensaje cuando no hay datos a mostrar*/
    $scope.sinDatos=false;
    var array=[];
    $scope.markers = [];
        
	if (category!=" ") {
        for (var i =0; i<datos.length; i++) {
            if (datos[i].subject==category) 
                array.push(datos[i]);
        }
    } else {
        array=coursesCategory.datos;
    }
    $rootScope.pp = array;
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

    courses_map.cargarmap($scope.file, $scope);
    
    // CommonService.comentarios($scope);
    $scope.openModalComentarios = function (id) {
            var modalInstance2 = $uibModal.open({
                animation: 'true',
                templateUrl: 'frontend/module/courses/view/modalComentariosCursos.html',
                controller: 'ComentariosCursosCtrl',
                size: "md",
                resolve: {
                    idCourse: function () {
                        return services.get('courses', 'verComentarios',  id);
                    }
                }
            });
        }

}]);

appLibra.filter('beginning_data', function() {
    return function(input, begin) {
        /*console.log(input);*/
        /*console.log(begin);*/
        if (input) {
        	/*console.log("yeeeeee");*/
            begin = +begin;
            return input.slice(begin);
        }
        return [];
    }
});


appLibra.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      $anchorScroll();
    };
}]);

appLibra.controller('scrollComentariosCtrl', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      $anchorScroll();
    };
}]);




appLibra.controller('ComentariosCursosCtrl', ['$scope', '$location', '$anchorScroll', 'idCourse', 'CommonService', function($scope, $location, $anchorScroll, idCourse, CommonService) {

    console.log(idCourse);
    $scope.comentariosCur=idCourse;
    if ($scope.comentariosCur.avatar) {}

    CommonService.cerrarModal($scope);
    $scope.submitEnviarComentario=function(){
        console.log($scope.comentario);
    }

    
}]);