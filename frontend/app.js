


    var appLibra = angular.module('appLibra',['ngRoute', , 'ngAnimate', 'ngCookies', 'jcs-autoValidate']);




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
                
                .otherwise({
                  redirectTo: '/'
                })
                

        }]);


