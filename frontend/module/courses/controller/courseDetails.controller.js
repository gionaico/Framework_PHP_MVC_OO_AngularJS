console.log("enrta");

appLibra.controller('courseDetailsCtrl', function ($scope, services, courseDetails) {
    if (courseDetails.success) {
        console.log(courseDetails.datos[0]);
        $scope.courseDet=courseDetails.datos[0]; 
    } else {
        var toasts = new Toast('Course Details', 'error', 'toast-bottom-right', courseDetails.mensaje, 15000);
        delayToasts(toasts,0);
    }
});