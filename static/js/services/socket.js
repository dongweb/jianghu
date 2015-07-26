/**
 * Created by dd_fly on 15/7/25.
 */
angular.module('frontModule').factory('socket',function($rootScope){
    var socket = io();
    return {
        on:function(event,callback){
            socket.on(event,function(){
                var args = arguments;
                $rootScope.$apply(function(){
                    callback.apply(socket,args);
                });
            });
        },
        emit:function(event,data){
            socket.emit(event,data);
        }
    }
});