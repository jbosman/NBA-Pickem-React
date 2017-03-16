const express = require('express');
const path = require('path');

app = express();

require('./parsing-middleware')(app);

app.use('/public', express.static( path.join(__dirname, '../../public')));

app.use('/api', require('./routes'));

// Make sure any routes direct them to the index page
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})

module.exports = () => app;

