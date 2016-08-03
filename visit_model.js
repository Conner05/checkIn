var mongoose = require('mongoose');

var Visit = mongoose.Schema({
	checkIn: {
		time: Date,
		comment: String
	},
	checkOut: {
		time: Date,
		comment: String
	},
    user: {
    	type: Schema.Types.ObjectId, ref: 'User'
    },
    location: {
    	type: Schema.Types.ObjectId, ref: 'Location'
    }
});

/* Virtual Getters */
Visit.virtual('user.checkIn').get(function() {
	return this.user.name + ' checked in at ' + checkIn + ' at ' + location.name;
});
Visit.virtual('user.checkOut').get(function() {
	return this.user.name + ' checked out at ' + checkOut + ' at ' + location.name;
});

module.exports = mongoose.model('Visit', Visit);