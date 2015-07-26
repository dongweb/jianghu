var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var userService = require('../services/user');
router.get('/check',function(req,res){
    var userId = req.session.userId;
    console.log('check req.session.userId',userId);
    if(userId){
        userService.findById(userId,function(err,user){
            if(err)
                res.json(500,{msg:err});
            else{
                res.json(user);
            }
        });
    }
});

router.get('/logout',function(req,res){
    req.session.userId = null;
    res.json({msg:'logout successfully'});
});
router.post('/reg',function(req,res){
    var user = req.body;
    var md5Email = crypto.createHash('md5').update(user.email).digest('hex');
    var avatar = "https://secure.gravatar.com/avatar/"+md5Email+"?s=48";
    user.avatar = avatar;
    user.password = crypto.createHash('md5').update(user.password+"").digest('hex');
    userService.save(user,function(err,user){
        if(err)
            res.json(500,{msg:err});
        else{
            req.session.userId = user._id;
            res.json(user);
        }
    });
});

router.post('/login',function(req,res){
    var user = req.body;
    user.password = crypto.createHash('md5').update(user.password+"").digest('hex');
    userService.login(user,function(err,user){
        if(err)
            res.json(500,{msg:err});
        else{
            req.session.userId = user._id;
            console.log('login',req.session.userId,user._id)
            res.json(user);
        }
    });
});
module.exports = router;