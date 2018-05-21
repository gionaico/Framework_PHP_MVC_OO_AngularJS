
appLibra.factory("CommonService", ['$rootScope','$timeout', function ($rootScope, $timeout) {
    var service = {};
        service.alertError   = alertError;
        service.alertInfo = alertInfo;

    return service;
        
    function alertError(mensaje){        
        swal({
          type: 'error',
          title: 'Oops...',
          text: ''+mensaje+'',
          footer: '<a href>Why do I have this issue?</a>',
        });
    }

    function alertInfo(mensaje){        
        swal({
          type: 'info',
          title: 'Oops...',
          text: ''+mensaje+'',
          footer: '<a href>Why do I have this issue?</a>',
        });
    }

}]);
