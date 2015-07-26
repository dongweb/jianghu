angular.module('frontModule').controller('RegCtrl',function($rootScope,$scope,$http,$location,socket){
    $scope.user = {};
    $scope.save = function(){
        $http({
            url:'/users/reg',
            method:'POST',
            data:$scope.user
        }).success(function(user){
            $rootScope.currentUser = user;
            $location.path('/');
        }).error(function(){

        });
    }
});