var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    username:String,
    password:String,
    email:String,
    avatar:String,
    health:{type:'Number',default:100},
    attack:{type:'Number',default:10},
    defend:{type:'Number',default:10}
});
module.exports = User;