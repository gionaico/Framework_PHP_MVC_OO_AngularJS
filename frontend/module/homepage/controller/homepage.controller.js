/*console.log("entra en home js");
*/
appLibra.controller('homepageCtrl',  function ($scope, $rootScope, services, cursosMasValorados, categoriaCourses, CommonService,  cursosVisitados) {/*
    console.log(cursosMasValorados);*//*
    console.log(categoriaCourses);*/

    $scope.hacerPrueba=function(){
        services.get('examen', 'a', "datosAvatar")
            .then(function (response) {
                console.log(response);
                
            });
    }

    var limite = 0;
    var limite_b = 2;
    var limiteCat = 0;
    var limiteCat_b = 2;
    $scope.courses=[];
    $scope.categories=[];
    $scope.coursesVisit=[];
    // var cursosVisitados=CommonService.getCursosDecod();
    console.log(cursosVisitados.cursos);
    if ((cursosVisitados.success)&&(cursosVisitados.cursos.length>=3)) {
        var limiteCurVisit = 0;
        var limiteCurVisit_b = 2;
        $scope.ultimosVisitados=true;
        for (var i =limiteCurVisit; i<=limiteCurVisit_b; i++) {
            $scope.coursesVisit.push(cursosVisitados.cursos[i]);
        }
    }


    for (var i =limite; i<=limite_b; i++) {
        $scope.courses.push(cursosMasValorados[i]);
    }
    for (var i =limiteCat; i<=limiteCat_b; i++) {
        $scope.categories.push(categoriaCourses[i]);
    }

/*    console.log($scope.courses);*/
    $scope.moreCourses=function(){
        limite=limite+3;
        limite_b=limite_b+3;
        /*console.log(limite+" "+limite_b);*/
        if (limite_b>=cursosMasValorados.length) {
            for (var i =limite; i<cursosMasValorados.length; i++) {
                /*console.log(cursosMasValorados[i]);*/
                $scope.courses.push(cursosMasValorados[i]);
            }
        } else {
            for (var i =limite; i<=limite_b; i++) {
                /*console.log(cursosMasValorados[i]);*/
                $scope.courses.push(cursosMasValorados[i]);
            }
        }
    }

    $scope.moreCategories=function(){
        limiteCat=limiteCat+3;
        limiteCat_b=limiteCat_b+3;
        /*console.log(limiteCat+" "+limiteCat_b);*/
        if (limiteCat_b>=categoriaCourses.length) {
            for (var i =limiteCat; i<categoriaCourses.length; i++) {
                /*console.log(categoriaCourses[i]);*/
                $scope.categories.push(categoriaCourses[i]);
            }
        } else {
            for (var i =limiteCat; i<=limiteCat_b; i++) {
                /*console.log(categoriaCourses[i]);*/
                $scope.categories.push(categoriaCourses[i]);
            }
        }
    }

    $rootScope.coursesVisitados=function(id){
        CommonService.updateCourVisitadosLocStor(id);
        console.log(CommonService.getCursosDecod());
    }

    $scope.moreCoursesVisitados=function(){
        limiteCurVisit=limiteCurVisit+3;
        limiteCurVisit_b=limiteCurVisit_b+3;
        /*console.log(limite+" "+limite_b);*/
        if (limiteCurVisit_b>=cursosVisitados.cursos.length) {
            for (var i =limiteCurVisit; i<cursosVisitados.cursos.length; i++) {
                /*console.log(cursosMasValorados[i]);*/
                $scope.coursesVisit.push(cursosVisitados.cursos[i]);
            }
        } else {
            for (var i =limiteCurVisit; i<=limiteCurVisit_b; i++) {
                /*console.log(cursosMasValorados[i]);*/
                $scope.coursesVisit.push(cursosVisitados.cursos[i]);
            }
        }
    }    


    
});


