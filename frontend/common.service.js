
appLibra.factory("CommonService", ['$rootScope','$timeout', function ($rootScope, $timeout) {
    var service = {};
        service.alert   = alert;
        service.alertTimer= alertTimer;

    return service;
        
    function alert(type, mensaje, title){        
        swal({
          type: ''+type+'',
          title: ''+title+'',
          html: ''+mensaje+'',
          animation: true,
        });          
    }

    function alertTimer(type, mensaje, title, tiempo){        
        swal({
          type: ''+type+'',
          title: ''+title+'',
          html: ''+mensaje+'',
          animation: true,
          showConfirmButton: false,
          timer: tiempo,
        });          
    }

    

}]);
