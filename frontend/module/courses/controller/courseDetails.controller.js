console.log("enrta");

appLibra.controller('courseDetailsCtrl', function ($scope, services, courseDetails, courses_map) {
    if (courseDetails.success) {
        console.log(courseDetails.datos[0]);
        $scope.markers = [];
        $scope.courseDet=courseDetails.datos[0]; 
        /*courses_map.cargarmap(courseDetails.datos, $scope);*/
    } else {
        var toasts = new Toast('Course Details', 'error', 'toast-bottom-right', courseDetails.mensaje, 15000);
        delayToasts(toasts,0);
    }
});