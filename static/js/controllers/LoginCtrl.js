angular.module('frontModule').controller('LoginCtrl',function($scope,socket,$http,$rootScope,$location){
    $scope.user = {};
    $scope.save = function(){
        $http({
            url:'/users/login',
            method:'POST',
            data:$scope.user
        }).success(function(user){
            $rootScope.currentUser = user;
            $location.path('/');
        }).error(function(data){
            console.error(data);
        });
    }
});