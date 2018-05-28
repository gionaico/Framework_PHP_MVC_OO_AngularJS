


    var appLibra = angular.module('appLibra',['ngRoute', 'ngAnimate', 'ngCookies', 'jcs-autoValidate',  'ui.bootstrap', 'ngMaterial', 'ngMessages']);




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


                .otherwise({
                  redirectTo: '/'
                })
                

        }]);



