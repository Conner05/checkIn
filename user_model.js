var mongoose = require('mongoose');

var User = mongoose.Schema({
	name: String,
	email: String,
    password: String,
    isCheckedIn: Boolean,
    isManager: Boolean
});

module.exports = mongoose.model('User', User);