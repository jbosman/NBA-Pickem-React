const app = require('express')();
const LEAGUE = require('../../database/league');

app.get('/', (req, res, next) => {
	res.send(LEAGUE);
});

module.exports = app;