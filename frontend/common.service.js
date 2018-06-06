
appLibra.factory("CommonService", ['$rootScope','$timeout', '$uibModal', '$uibModalStack', '$cookies', '$q', '$filter', 'services',function ($rootScope, $timeout, $uibModal, $uibModalStack, $cookies, $q, $filter, services) {
    var service = {};
        service.alert   = alert;
        service.alertTimer= alertTimer;
        service.alertFormatPass= alertFormatPass;
        service.updateCourVisitadosLocStor= updateCourVisitadosLocStor;
        service.getCursosDecod= getCursosDecod;
        service.comentarios= comentarios;
        service.cerrarModal= cerrarModal;
        service.toast= toast;
        service.saveCarritoLocStor= saveCarritoLocStor;
        service.getCarritoDecod= getCarritoDecod;

    return service;

    /*--CARRITO EN LOCALSTORAGE*/
    function saveCarritoLocStor(nuevoCurso) {
        console.log("curso nuevo en carrito"+nuevoCurso);
        var cursos = getCarrito();
        // save to local storage
        var existe=false;
        for (var i = cursos.enCarrito.length - 1; i >= 0; i--) {
          if (cursos.enCarrito[i]==Base64_encode(nuevoCurso)) {
            existe=true;
          }
        }
        if (!existe) {
          cursos.enCarrito.push(Base64_encode(nuevoCurso));
        }
        setCarrito(cursos);
    }

    function getCarrito() {
        if(!localStorage.carrito){
            var contenido={enCarrito:[]};
            localStorage.carrito = JSON.stringify(contenido);
        }
        return JSON.parse(localStorage.carrito);
    }

    function setCarrito(cursos) {
        localStorage.carrito = JSON.stringify(cursos);
    }

    function getCarritoDecod() {
        var curEnCarrito=[];
        if(!localStorage.carrito){
            var contenido={enCarrito:[]};
            localStorage.carrito = JSON.stringify(contenido);
        }else{
          var carrito=JSON.parse(localStorage.carrito);
          if (carrito.enCarrito.length!=0) {
            for (var i = carrito.enCarrito.length - 1; i >= 0; i--) {
                curEnCarrito.push(Base64_decode(carrito.enCarrito[i]))
            }
          }
        }
        console.log(curEnCarrito.length);
        return curEnCarrito;
    }


    function toast(title, tipo, ubicacioToast, mensaje, tiempo){
        /*  POSITIONS
                toast-top-full-width
                toast-top-left
                toast-top-center
                toast-top-right
                toast-bottom-full-width
                toast-bottom-right
                toast-bottom-center
                toastst-bottom-left

            TYPES
                error
                info
                warning
                success

         */

        var toasts = new Toast(title, tipo, ubicacioToast, mensaje, tiempo);
        delayToasts(toasts,0);
    }
        

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


    function updateCourVisitadosLocStor(nuevoCurso) {
        console.log("curso nuevo "+nuevoCurso);
        var cursos = getCursos();
        // save to local storage
        var existe=false;
        for (var i = cursos.visitados.length - 1; i >= 0; i--) {
          if (cursos.visitados[i]==Base64_encode(nuevoCurso)) {
            existe=true;
          }
        }
        if (!existe) {
          cursos.visitados.push(Base64_encode(nuevoCurso));
        }
        setCursos(cursos);
    }


    function getCursos() {
        if(!localStorage.cursos){
            var contenido={visitados:[], categoria:[]};
            localStorage.cursos = JSON.stringify(contenido);
        }
        return JSON.parse(localStorage.cursos);
    }

    function getCursosDecod() {
        var curVisitados=[];
        if(!localStorage.cursos){
            var contenido={visitados:[], categoria:[]};
            localStorage.cursos = JSON.stringify(contenido);
        }else{
          var cursos=JSON.parse(localStorage.cursos);
          if (cursos.visitados.length!=0) {
            for (var i = cursos.visitados.length - 1; i >= 0; i--) {
                curVisitados.push(Base64_decode(cursos.visitados[i]))
            }
          }
        }
        console.log(curVisitados.length);
        return curVisitados;
    }


    function setCursos(cursos) {
        localStorage.cursos = JSON.stringify(cursos);
    }


    function Base64_encode(input) {
        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);
        return output;
    }

    
    function Base64_decode(input) {
        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
            window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        do {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);
        return output;
    }

    function comentarios($scope){
        console.log("noonnonononono");
        $scope.openModalComentarios = function (id) {
            var modalInstance2 = $uibModal.open({
                animation: 'true',
                templateUrl: 'frontend/module/courses/view/modalComentariosCursos.html',
                controller: 'ComentariosCursosCtrl',
                size: "md",
                resolve: {
                    idCourse: function () {
                        return services.get('courses', 'verComentarios',  id);
                    }
                }
            });
        }
    }

    function cerrarModal($scope){
        $scope.close2 = function () {
            $uibModalStack.dismissAll();
        };
    }


}]);


    // function Create(nuevoCurso) {
    //     var cursos = getCursos();
    //     // save to local storage
    //     cursos.visitados.push(nuevoCurso);
    //     setCursos(cursos);
    // }


    // function getCursos() {
    //     if(!localStorage.cursos){
    //         var contenido={visitados:[], categoria:[]};
    //         localStorage.cursos = JSON.stringify(contenido);
    //     }
    //     return JSON.parse(localStorage.cursos);
    // }


    // function setCursos(cursos) {
    //     localStorage.cursos = JSON.stringify(cursos);
    // }
