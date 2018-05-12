console.log("courseController");

appLibra.controller('coursesCategoryCtrl', function ($scope, services, coursesCategory) {
    window.scrollTo(0, 0);
    
    var category=coursesCategory.category;
    console.log(coursesCategory);
    console.log("categoria es:  "+coursesCategory.category);
    var datos=coursesCategory.datos;
    $scope.courseslist=[];
    
    
    console.log(category);

    if (category!=" ") {
        console.log("lleno");
        for (var i =0; i<datos.length; i++) {
            if (datos[i].subject==category) 
                $scope.courseslist.push(datos[i]);
        }
    } else {
        console.log("vacio");
        $scope.courseslist=coursesCategory.datos;
    }

    /*var rounded = Math.round(12.1+0.4);
    console.log(rounded);*/

    console.log($scope.courseslist);
    var mensaje="No hay courses con estos parametros"
});