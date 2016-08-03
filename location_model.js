var mongoose = require('mongoose');

var Location = mongoose.Schema({
	name: String,
	coords: {
		lat: Number,
		lng: Number
	}
});

module.exports = mongoose.model('Location', Location);