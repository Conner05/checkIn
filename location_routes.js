var _ = require('lodash');

module.exports = function(app) {

	_locations = [];

	/* Create */
	app.post('/location', function(req, res) {
		_locations.push(req.body);
		res.json({info: 'location created successfully'});
	});

	/* Read */
	app.get('/location', function(req, res) {
		res.send(_locations);
	});

	app.get('/location/:id', function(req, res) {
		res.send(
			_.find(
				_locations,
				{
					name: req.params.id
				}
			)
		);
	});

	/* Update */
	app.put('/location/:id', function(req, res) {
		var index = _.findIndex(
			_locations, 
			{ 
				name: req.params.id 
			}
		);

		_.merge(_locations[index], req.body);
		res.json({ info: 'location updated successfully' });

	});

	/* Delete */
	app.delete('/location/:id', function(req, res) {
		_.remove(_locations, function(req, res) {
			return location.name === req.params.id;
		});
		res.json({ info: 'location removed successfully' });
	});
}