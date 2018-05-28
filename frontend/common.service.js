
appLibra.factory("CommonService", ['$rootScope','$timeout', function ($rootScope, $timeout) {
    var service = {};
        service.alert   = alert;
        service.alertTimer= alertTimer;
        service.alertFormatPass= alertFormatPass;

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

    function alertFormatPass(){    
      var mensaje="<p>Usar 1 letra mayuscula</p>"+
          "<p>Usar 1 letra minuscula</p>"+
          "<p>Usar caracteres como -+_.</p>"+
          "<p>Usar un numero</p>";    
        swal({
          type: 'info',
          title: 'Formato de password',
          html: ''+mensaje+'',
          animation: false,
        });          
    }

    

}]);
