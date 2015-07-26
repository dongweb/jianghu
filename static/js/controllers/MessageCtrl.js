angular.module('frontModule').controller('MessageCtrl',function($rootScope,$scope,socket){
    $scope.createMessage = function(){
        socket.emit('message',{
            creator:$rootScope.currentUser,
            content:$scope.newMessage
        });
        $scope.newMessage = '';
    }
});