angular.module('frontModule',['ngRoute','angularMoment'])
    .config(function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'tmpl/home.html',
            controller:'HomeCtrl'
        }).when('/reg',{
            templateUrl:'tmpl/reg.html',
            controller:'RegCtrl'
        }).when('/login',{
            templateUrl:'tmpl/login.html',
            controller:'LoginCtrl'
        }).when('/street',{
            templateUrl:'tmpl/street.html',
            controller:'StreetCtrl'
        }).otherwise({
            redirectTo:'/'
        });
    }).run(function($http,$rootScope,$location){
        $http({
            url:'/users/check',
            method:'GET'
        }).success(function(user){
            console.log('check',user);
            $rootScope.currentUser = user;
            $location.path('/');
        }).error(function(){
            $location.path('/login');
        });
    });