/**
 * Created by dd_fly on 15/7/25.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/front');
exports.User = mongoose.model('User',require('./user'));