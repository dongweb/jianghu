var db = require('../models');

exports.save = function(user,callback){
    new db.User(user).save(function(err,user){
        if(err)
            callback(err);
        else
            callback(null,user);
    });
}
exports.findById = function(userId,callback){
    db.User.findOne({_id:userId},function(err,user){
        if(err)
            callback(err);
        else
            callback(null,user);
    });
}
//登陆
exports.login = function(user,callback){
    db.User.findOne({username:user.username,
        password:user.password},function(err,result){
        if(err)
            callback(err);
        else{
            callback(null,result);
        }
    });
}