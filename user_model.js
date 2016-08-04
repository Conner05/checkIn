var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	email: String,
    password: String,
    isCheckedIn: Boolean,
    isManager: Boolean
});

var User = mongoose.model('User', userSchema);