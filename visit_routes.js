var _ = require('lodash');

module.exports = function(app) {

	_visits = [];

	/* Create */
	app.post('/visit', function(req, res) {
		_visits.push(req.body);
		res.json({info: 'visit created successfully'});
	});

	/* Read */
	app.get('/visit', function(req, res) {
		res.send(_visits);
	});

	app.get('/visit/:id', function(req, res) {
		res.send(
			_.find(
				_visits,
				{
					name: req.params.id
				}
			)
		);
	});

	/* Update */
	app.put('/visit/:id', function(req, res) {
		var index = _.findIndex(
			_visits, 
			{ 
				name: req.params.id 
			}
		);

		_.merge(_visits[index], req.body);
		res.json({ info: 'visit updated successfully' });

	});

	/* Delete */
	app.delete('/visit/:id', function(req, res) {
		_.remove(_visits, function(req, res) {
			return visit.name === req.params.id;
		});
		res.json({ info: 'visit removed successfully' });
	});
}