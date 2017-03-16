import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

const App = () => {
	const store = createStore( reducers, {}, applyMiddleware(promise) );

	return (
		<Provider store={store}>
			<Router history={ browserHistory } routes={routes} />
		</Provider>
	)
}

render(<App />, document.getElementById('app'));

