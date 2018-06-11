


    var appLibra = angular.module('appLibra',['ngRoute', 'ngAnimate', 'ngCookies', 'jcs-autoValidate', 'ui.bootstrap',  'ngMaterial', 'ngMessages', 'ngAside', 'chat']);

    angular.module('chat').constant('config', {
        rltm: {
            service: "pubnub",
            config: {
                publishKey: "pub-c-a18ba866-281a-4d97-a060-7ac4b0ebcdd6",
                subscribeKey: "sub-c-dc8424e8-6439-11e8-b753-ce5efc28367f"
            }
        }
    });


    appLibra.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
            	
            	/*Home*/
                .when('/',{
                    templateUrl: 'frontend/module/homepage/view/homepage.html', 
                    controller: "homepageCtrl",
                    resolve: {
                        cursosMasValorados: function (services) {
                            return services.get('homepage', 'getCourses');
                        },
                        categoriaCourses: function (services) {
                            return services.get('homepage', 'getCategorias');
                        },
                        cursosVisitados: function (services, CommonService) {
                            var cursosVisitados=CommonService.getCursosDecod();
                            // console.log(cursosVisitados.length);
                            if (cursosVisitados.length>0) {
                                return services.post('homepage', 'cursosVisitados', cursosVisitados);
                            }
                            var courses={};
                            courses.success=false;
                            return courses;
                        }
                    }
                })

                /*Course Details*/
                .when("/course/:id", {
                    templateUrl: "frontend/module/courses/view/courseDetails.html",
                    controller: "courseDetailsCtrl",
                    resolve: {
                        courseDetails: function (services, $route) {
                            return services.get('courses', 'coursetDetails', $route.current.params.id);
                        }
                    }
                })

                /*Chat */
                .when("/chat", {
                    templateUrl: "frontend/module/chat/view/chat.html",
                    controller: "chatCtrl"
                })

                /*Carrito */
                .when("/basket", {
                    templateUrl: "frontend/module/basket/view/basket.html",
                    controller: "BasketCtrl"/*,
                    resolve: {
                        cursosCarrito: function (services, CommonService) {
                            var datos = CommonService.getCarritoDecod();
                            console.log(datos);
                            
                        }
                    }*/
                })

                /*PsnerAdmin */
                .when("/panelAdministracion", {
                    templateUrl: "frontend/module/profile/view/panelAdministracion.html",
                    controller: "panelAdministracionCtrl",
                    resolve: {
                        datosPerfil: function (services, cookiesService) {
                            var datos = cookiesService.GetToken();
                            console.log(datos);
                            if ((datos.success) && (datos.token!=undefined)){
                                return services.get('profile', 'datosPerfil', datos.token);
                            }
                            var user={};
                            user.success=false;
                            return user;
                        }
                    }
                })

                .when("/adminChat", {
                    templateUrl: "frontend/module/chat/view/adminChat.html",
                    controller: "adminChatCtrl"
                })

                /*Course Form*/
                .when("/courseForm", {
                    templateUrl: "frontend/module/courses/view/courseForm.html",
                    controller: "courseFormCtrl",
                })

                /*Courses Category*/
                .when("/courses/:id", {
                    templateUrl: "frontend/module/courses/view/courses.html",
                    controller: "coursesCategoryCtrl",
                    resolve: {
                        coursesCategory: function (services, $route) {
                            return services.get('courses', 'getAllCourses', $route.current.params.id);
                        },
                        puntos: function (services, $route) {
                            return services.get('courses', 'puntos');
                        }
                    }
                })

                /*Contact*/
                .when("/contact", {
                    templateUrl: "frontend/module/contact/view/contact.html", 
                    controller: "contactCtrl"
                })
                

                /*Activar Usuario*/
                .when("/profile/activar/:token", {
                    templateUrl: "frontend/module/homepage/view/homepage.html",
                    controller: "verifyTokenCtrl"
                })


                /*Cambiar password usuario*/
                .when("/user/changePass/:token", {
                    templateUrl: "frontend/module/profile/view/changePass.html",
                    controller: "changePassCtrl"
                })

                /*Cambiar password usuario*/
                .when("/user/myProfile/", {
                    templateUrl: "frontend/module/profile/view/profileForm.html",
                    controller: "profileFormCtrl",
                    resolve: {
                        user: function (services, cookiesService) {
                            var datos = cookiesService.GetToken();
                            console.log(datos);
                            if ((datos.success) && (datos.token!=undefined)){
                                return services.get('profile', 'infoUser', datos.token);
                            }
                            var user={};
                            user.success=false;
                            return user;
                        }
                    }
                })


                /*Administracion de usuarios*/
                .when("/admin/adminUsers/", {
                    templateUrl: "frontend/module/profile/view/adminUsers.html",
                    controller: "adminUsersCtrl",
                    resolve: {
                        usuario: function (services, cookiesService) {
                            var datos = cookiesService.GetToken();
                            console.log(datos);
                            if ((datos.success) && (datos.token!=undefined)){
                                return services.get('profile', 'infoUsuarios', datos.token);
                            }
                            var usuario={};
                            usuario.success=false;
                            return usuario;
                        }
                    }
                })

                /*Update de usuarios*/
                .when("/admin/adminUsers/update/:id", {
                    templateUrl: "frontend/module/profile/view/profileForm.html",
                    controller: "updateUserCtrl",
                    resolve: {
                        datosUsuario: function (services, $route, cookiesService) {
                            var datos = cookiesService.GetToken();
                            console.log(datos);
                            if ((datos.success) && (datos.token!=undefined)){
                                console.log(datos.token);
                                console.log($route.current.params.id);
                                var json={token:datos.token, id:$route.current.params.id};
                                return services.post('profile', 'datosUsuario', json);
                            }
                            var datosUsuario={};
                            datosUsuario.success=false;
                            return datosUsuario;
                            
                        }
                    }
                })


                .otherwise({
                  redirectTo: '/'
                })
                

        }]);
        
        appLibra.run(['$rootScope', '$uibModal', '$uibModalStack', 'services', 'cookiesService', 'CommonService', function($rootScope, $uibModal, $uibModalStack, services, cookiesService, CommonService) {

            $rootScope.hacerLike=function(id){
                console.log(id);
                var datos= cookiesService.GetToken();
                console.log(datos);
                if (datos.success) {
                    services.post('profile', 'hacerLike',  {token: datos.token, course:id})
                        .then(function (response) {
                            if (response.success) {
                                CommonService.alertTimer("success", response.mensaje, "LIKE", 2000);
                            }else{
                                console.log(response);
                                CommonService.alert("info", response.mensaje, "LIKE");
                            }
                         }).catch(function(err) {
                            console.log(err);
                            console.log("error en peticion con servidor");
                        });
                }else{
                    CommonService.alert("info", "Para hacer like a un producto, es necesario estar logueado. Por favor inicia sesion", "LIKE");
                }
            }


            $rootScope.carrito = [];
            var cursos=CommonService.getCarritoDecod();
            if (cursos.length!=0) {
                services.post('basket', 'traerCursosCarrito', {cursos:CommonService.getCarritoDecod()})
                        .then(function (cursosCarrito) {
                            console.log(cursosCarrito);
                            for (var i = 0; i < cursosCarrito.length; i++) {
                                $rootScope.carrito.push({
                                    Producto: cursosCarrito[i],
                                    Cantidad: 1
                                });
                            }                        
                            
                        });
            }

            console.log($rootScope.carrito.length);
            $rootScope.agregar = function (p) {
                console.log(p.id);
                var itemActual=true;

                for (var i = 0; i < $rootScope.carrito.length; i++) {
                    /*Entra cada vez que agrega un producto*/
                        console.log($rootScope.carrito[i].Producto.id);
                    if ($rootScope.carrito[i].Producto.id == p.id) {
                        console.log(p.id);
                        /*Entra la cantidad de un mismo producto cambia*/
                        CommonService.alert("info", "Este producto ya esta en el carrito", "Carrito de Compra");
                        itemActual = false;
                    }
                }

                if (itemActual) {
                    // Entra cada vez que agrega un producto
                    $rootScope.carrito.push({
                        Producto: p,
                        Cantidad: 1
                    });
                    CommonService.saveCarritoLocStor(p.id);

                    CommonService.toast("Curso agregado", "success", "toast-top-right", "El curso se agrego correctamente, puedes ver los productos agregados en la seccion de carrito", 3000);
                    console.log(1);
                }
                console.log($rootScope.carrito);
            }

        }]);


