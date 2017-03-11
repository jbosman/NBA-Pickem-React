import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/home';
import League from './components/league'; 

export default (
	<Route path='/' component={Home} >
		<IndexRoute component={League} />
	</Route>
);