appLibra.factory("courses_map", ['$rootScope',function ($rootScope) {
    var service = {};
    service.cargarmap = cargarmap;
    service.cargarmapEvent = cargarmapEvent;
    service.marcar = marcar;
    return service;

    function cargarmap(arrArguments, $rootScope) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);

        function showPosition(position){
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            latlon = new google.maps.LatLng(lat, lon);
            mapholder = document.getElementById('mapholder');
            mapholder.style.height = '550px';
            // mapholder.style.width = '900px';

            var myOptions = {
                center: latlon, zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            };
            var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
            // var marker = new google.maps.Marker({position: latlon, map: map, title: "You are here!"});

            $rootScope.map = map;
            for (var i = 0; i < arrArguments.length; i++) {
                marcar(map, arrArguments[i], $rootScope);
            }
        }/*end showPosition*/

        function showError(error){
            switch (error.code){
                case error.PERMISSION_DENIED:
                    $rootScope.demo = "Denegada la peticion de Geolocalización en el navegador.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    $rootScope.demo = "La información de la localización no esta disponible.";
                    break;
                case error.TIMEOUT:
                    $rootScope.demo = "El tiempo de petición ha expirado.";
                    break;
                case error.UNKNOWN_ERROR:
                    $rootScope.demo = "Ha ocurrido un error desconocido.";
                    break;
            }
        }/*end showerror*/
    }/*end cargarmap*/

    
    function marcar(map, course, $rootScope) {
        var latlon = new google.maps.LatLng(course.lat, course.lng);
        var marker = new google.maps.Marker({position: latlon, map: map, title: course.title, animation: null});

        marker.set('id', course.id);
        marker.set('latlon', latlon);

        var infowindow = new google.maps.InfoWindow({
            content: '<a href="#/course/'+course.id+'"><div class="col-md-4"><img src="backend/'+course.avatar+'" class="mediana"/> </div> <div class="col-md-8"><h1 class="course_title">' + course.title + '</h1><p class="course_content">' + course.courseDescr + '</p><p class="course_content">Duracion: ' + course.duration + '</p><p class="course_content"> <h4> Price:' + course.price + '€ </h4> </p> </div></a>'
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
            google.maps.event.addListener(infowindow, 'domready', function () {
                var iwOuter = $('.gm-style-iw');
                var iwCloser = iwOuter.next();
                var iwBackground = iwOuter.prev();

                iwBackground.children(':nth-child(2)').css({'display': 'block'});
                iwBackground.children(':nth-child(4)').css({'display': 'block'});
                iwBackground.children(':nth-child(1)').attr('style', function (i, s) {
                    return s + 'left: 76px !important;'
                });
                iwBackground.children(':nth-child(3)').attr('style', function (i, s) {
                    return s + 'left: 76px !important;'
                });
                iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'background-color': '#f5f5f5', 'z-index': '1'});
                iwCloser.css({
                    opacity: '1',
                    right: '18px', top: '3px',
                    'border-radius': '13px', // circular effect
                    'box-shadow': '0 0 5px #3990B9' // 3D effect to highlight the button
                });
                iwCloser.mouseout(function () {
                    $(this).css({opacity: '1'});
                });
            });
        });/*end google.maps*/
        $rootScope.markers.push(marker);
    }/*end marcar*/



    function cargarmapEvent(event, $rootScope) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);

        function showPosition(position){
            lat = event.latitud;
            lon = event.longitud;
            latlon = new google.maps.LatLng(lat, lon);
            mapholder = document.getElementById('mapholder');
            mapholder.style.height = '350px';
            mapholder.style.width = '80%';

            var myOptions = {
                center: latlon, zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: true
            };
            var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
            $rootScope.map = map;
            marcar(map, event, $rootScope);
        }

        function showError(error){
            switch (error.code){
                case error.PERMISSION_DENIED:
                    $rootScope.demo = "Denegada la peticion de Geolocalización en el navegador.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    $rootScope.demo = "La información de la localización no esta disponible.";
                    break;
                case error.TIMEOUT:
                    $rootScope.demo = "El tiempo de petición ha expirado.";
                    break;
                case error.UNKNOWN_ERROR:
                    $rootScope.demo = "Ha ocurrido un error desconocido.";
                    break;
            }
        }
    }


}]);
