angular.module('frontModule').controller('StreetCtrl',function($scope,socket){
    $scope.messages = [];
    socket.on('allMessages',function(messages){
        $scope.messages = messages;
    });
    socket.emit('getAllMessages');
    socket.on('message',function(message){
        console.log('message',message);
        $scope.messages.push(message);
    });
});