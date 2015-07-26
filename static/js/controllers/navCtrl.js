angular.module('frontModule').controller('NavCtrl',function($rootScope,$scope,socket,$http,$location){
    $scope.isActive = function(path){
        return path === $location.path();
    }

    $scope.logout = function(){
        $http({
            url:'/users/logout',
            method:'GET'
        }).success(function(user){
            $rootScope.currentUser = null;
            $location.path('/login');
        }).error(function(){

        });
    }
});