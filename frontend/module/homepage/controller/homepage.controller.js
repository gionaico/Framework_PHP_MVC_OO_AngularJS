console.log("entra en home js");

appLibra.controller('homepageCtrl', function ($scope, services, cursosMasValorados, categoriaCourses) {
    console.log(cursosMasValorados);
    console.log(categoriaCourses);
    var limite = 0;
    var limite_b = 2;
    $scope.courses=[];

    for (var i =limite; i=limite_b; i++) {
        $scope.courses.push(cursosMasValorados[i]);
    }

    $scope.moreCourses=function(){

    }


    
});