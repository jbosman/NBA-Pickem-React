import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/home';
import League from './components/league'; 
import TeamView from './containers/team-view';
import NBAStandingsView from './containers/nba-standings-view';

export default (
	<Route path='/' component={Home} >
		<IndexRoute component={League} />
		<Route path='/selected' component={TeamView} />
		<Route path='/nba/standings' component={NBAStandingsView} />
	</Route>
);

