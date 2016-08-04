var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
	name: String,
	coords: {
		lat: Number,
		lng: Number
	}
});

var Location = mongoose.model('Location', locationSchema);