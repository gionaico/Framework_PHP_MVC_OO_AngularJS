


    var appLibra = angular.module('appLibra',['ngRoute', 'ngAnimate', 'ngCookies', 'jcs-autoValidate',  'ui.bootstrap', 'ngMaterial', 'ngMessages', 'chat']);

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
/*
        appLibra.run(['Carousel', (Carousel) => {
          Carousel.setOptions({
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            cssEase: 'ease',
            dots: false,
         
            easing: 'linear',
            fade: false,
            infinite: true,
            initialSlide: 0,
         
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
          });
        }]);*/


