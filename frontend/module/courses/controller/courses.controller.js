
appLibra.controller('coursesCategoryCtrl', ['$rootScope', '$scope', '$timeout', 'services', '$uibModal', 'coursesCategory', 'courses_map', 'CommonService', 'cookiesService', 'puntos',function ($rootScope, $scope, $timeout, services, $uibModal, coursesCategory, courses_map, CommonService, cookiesService, puntos) {
    console.log(puntos);


    $scope.puntuar=function(puntuacion, id){
        console.log(puntuacion);
        console.log(id);
        var datos = cookiesService.GetToken();
        console.log(datos);
        if ((datos.success) && (datos.token!=undefined)){
            var info={token:datos.token,
                    curso:id,
                    puntos:puntuacion};
            services.post('courses', 'puntuarCurso', info)
                .then(function (response) {
                    console.log(response);
                    CommonService.alert("info", response.mensaje, "PUNTUAR");  
                });
        }else{
            CommonService.alert("error", "error de identidad", "PUNTUAR");   
        }
    }




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
        console.log(category);
        for (var i =0; i<datos.length; i++) {
            if (datos[i].subject==category) 
                array.push(datos[i]);
        }
    } else {
        array=coursesCategory.datos;
        console.log(array);
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




appLibra.controller('ComentariosCursosCtrl', ['$scope', '$location', '$anchorScroll', 'idCourse', 'CommonService', 'cookiesService', 'services',function($scope, $location, $anchorScroll, idCourse, CommonService, cookiesService, services) {

    console.log(idCourse);
    $scope.comentariosCur=idCourse.comentarios;

    CommonService.cerrarModal($scope);
    $scope.submitEnviarComentario=function(){
        console.log($scope.comentario);
        var datos = cookiesService.GetToken();
        console.log(datos);
        if ((datos.success) && (datos.token!=undefined)){
            services.post('courses', 'comentarCurso', {curso:idCourse.curso, comentario:$scope.comentario, token:datos.token})
                .then(function (response) {
                    // $scope.comentario="";
                    $scope.comentariosCur=response.comentarios;
                    CommonService.alertTimer("success", response.mensaje, "COMENTAR", 2000);
                    console.log(response);
                });
        }else{
            CommonService.alert("info", "Para poder hacer un comentario tienes que estar logueado previamente", "COMENTAR");
        }
    }

    
}]);