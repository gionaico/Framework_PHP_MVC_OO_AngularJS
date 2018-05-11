console.log("enrta");

appLibra.controller('courseDetailsCtrl', function ($scope, services, coursetDetails) {
    if (coursetDetails.success) {
        console.log(coursetDetails.datos[0]);
        $scope.courseDet=coursetDetails.datos[0]; 
    } else {
        var toasts = new Toast('Course Details', 'error', 'toast-bottom-right', coursetDetails.mensaje, 15000);
        delayToasts(toasts,0);
    }
});