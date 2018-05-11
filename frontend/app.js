


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

                /*Contact*/
                .when("/contact", {
                    templateUrl: "frontend/module/contact/view/contact.html", 
                    controller: "contactCtrl"
                })
                
                .otherwise({
                  redirectTo: '/'
                })
                

        }]);



