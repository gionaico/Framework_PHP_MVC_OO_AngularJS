   /*--CARRITO EN LOCALSTORAGE*/
    /*function saveCarritoLocStor(nuevoCurso) {
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
*/