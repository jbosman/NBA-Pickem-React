const configureApp = require('./configure');
const port = process.env.PORT || 8080;

const app = configureApp();

app.listen( port, () => {
	console.log("Listening on port " + port);
});