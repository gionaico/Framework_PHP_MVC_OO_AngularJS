console.log("courseController");

appLibra.controller('coursesCategoryCtrl', function ($scope, services, coursesCategory) {
    window.scrollTo(0, 0);
    /*Categoria que viene por ulr*/
    var category=coursesCategory.category;
    /*todos los cursos de la db*/
    var datos=coursesCategory.datos;
    /*array cursos segun la categoria seleccionada*/
    $scope.courseslist=[];
    /*array de cursos que se ven en cada pagina d paginacion*/
    $scope.courlistPintar=[];
    /*Mensaje cuando no hay datos a mostrar*/
    $scope.sinDatos=false;
    /*Div que contiene los cursos que se paginan*/
    $scope.coursesPintados=true;
    /*Funcion que inicia variables que se usan*/
	datosArranque(datos);    
    /*Estado de paginacion inicial*/
    $scope.currentPage=1;
    $scope.itemsPage=3;
    $scope.totalItems=$scope.courseslist.length;
    $scope.pagesShowed=Math.round((($scope.courseslist.length)/3)+0.4);

    if ($scope.courseslist.length==0) {
    	$scope.sinDatos=true;
    	$scope.coursesPintados=false;
    }

    

	
    $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	    var min=(($scope.currentPage*3)-3);
	    var max=(($scope.currentPage*3)-1);
		$scope.courlistPintar=[];

		for (var i = min; i <=max; i++) {
			if ($scope.courseslist[i]!=undefined) {
				$scope.courlistPintar.push($scope.courseslist[i]);
			}
		}    
	};



	function datosArranque(datos){
		if (category!=" ") {
	        for (var i =0; i<datos.length; i++) {
	            if (datos[i].subject==category) 
	                $scope.courseslist.push(datos[i]);
	        }
	    } else {
	        $scope.courseslist=coursesCategory.datos;
	    }

	    creaArrayDatosPagin();
	}


	function creaArrayDatosPagin(){
		if ($scope.courseslist.length<3) {
	    	for (var i = 0; i <$scope.courseslist.length; i++) {
				$scope.courlistPintar.push($scope.courseslist[i]);
			}
	    }else{
		    for (var i = 0; i <=2; i++) {
				$scope.courlistPintar.push($scope.courseslist[i]);
			}
	    }
	}


    function borrarFiltros(datos){
    	$scope.courseslist=datos;
    	$scope.currentPage=1;
	    $scope.itemsPage=3;
	    $scope.totalItems=datos.length;
	    $scope.pagesShowed=Math.round((($scope.courseslist.length)/$scope.itemsPage)+0.4);
	    creaArrayDatosPagin();
    } 
});



