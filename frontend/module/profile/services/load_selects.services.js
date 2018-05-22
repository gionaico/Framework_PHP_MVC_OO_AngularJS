appLibra.factory("load_selctLocation", ['services', '$q',
function (services, $q) {
    
    var service = {};
    service.load_pais = load_pais;
    service.loadProvincia = loadProvincia;
    service.loadPoblacion = loadPoblacion;
    return service;

    function load_pais() {
        var deferred = $q.defer();
        services.get("profile", "load_country", true).then(function (data) {
            //console.log(data);
            if (data === 'error') {
                deferred.resolve({ success: false, datas: "error_load_pais" });
            } else {
                deferred.resolve({ success: true, datas: data });

                //$.each(data, function (i, valor) {
                    //console.log(valor.sName);
                    //console.log(valor.sISOCode);
                //});
            }
        });
        return deferred.promise;
    };
    
    function loadProvincia() {
        var deferred = $q.defer();
        services.get("profile", "load_provinces", true).then(function (data) {
            //console.log(data);
            if (data === 'error') {
                deferred.resolve({ success: false, datas: "error_load_provincias" });
            } else {
                deferred.resolve({ success: true, datas: data.provincias });
                //$.each(data.provincias, function (i, valor) {
                    //console.log(valor.id);
                    //console.log(valor.nombre);
                //});
            }
        });
        return deferred.promise;
    };
    
    function loadPoblacion(datos) {
        var deferred = $q.defer();
        services.post("profile", "load_cities", datos).then(function (data) {
            //console.log(data);
            if (data === 'error') {
                deferred.resolve({ success: false, datas: "error_load_poblaciones" });
            } else {
                deferred.resolve({ success: true, datas: data.poblaciones });
                //$.each(data.poblaciones, function (i, valor) {
                    //console.log(valor.poblacion);
                //});
            }
        });
        return deferred.promise;
    };
}]);
