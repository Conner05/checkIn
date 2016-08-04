var mongoose = require('mongoose');

var visitSchema = mongoose.Schema({
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
visitSchema.virtual('user.checkIn').get(function() {
	return this.user.name + ' checked in at ' + checkIn + ' at ' + location.name;
});
visitSchema.virtual('user.checkOut').get(function() {
	return this.user.name + ' checked out at ' + checkOut + ' at ' + location.name;
});

var Visit = mongoose.model('Visit', visitSchema);