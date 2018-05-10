

/*var appLibra = angular.module('appLibra',['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngCookies', 'facebook']);*/
var appLibra = angular.module('appLibra',['ngRoute', , 'ngAnimate', 'ngCookies', 'jcs-autoValidate']);




    appLibra.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
            	
            	.when('/',{
			        templateUrl: 'frontend/module/homepage/view/homepage.html'
			    })

                /*Contact*/
                .when("/contact", {
                	templateUrl: "frontend/module/contact/view/contact.html", 
                	controller: "contactCtrl"
                })
			    
			    .otherwise({
			      redirectTo: '/'
			    })
            	/*Home*/
                /*.when("/", {
                	templateUrl: "frontend/assets/inc/menu.html"})*/

        }]);



