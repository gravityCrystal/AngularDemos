(function(){
    
angular.module("routeCode", ["ngRoute"])
.config(function($routeProvider,$locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'templates/main.html',
            controller  : 'appController'
        })

        // route for the about page
        .when('/home', {
            templateUrl : 'templates/home.html',
            controller  : 'appController'
        })
        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'appController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'templates/contact.html',
            controller  : 'appController'
        }).when('/login', {
            templateUrl : 'templates/login.html',
            controller  : 'appController'
        }).when('/sinup', {
            templateUrl : 'templates/signup.html',
            controller  : 'appController'
        })
        .otherwise( {"redirectTo":'/'})
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // }) 
});
})();
