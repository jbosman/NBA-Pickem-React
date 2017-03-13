const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

// Statically serve public folder
app.use( '/public', express.static( path.join( __dirname, '../public') ));

// Make sure any routes direct them to the index page
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen( port, () => {
	console.log("Listening on port " + port);

});