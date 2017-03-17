import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/root/root';
import League from './containers/league-view'; 
import TeamView from './containers/team-view';
import NBAStandingsView from './containers/nba-standings-view';

export default (
	<Route path='/' component= { Root } >
		<IndexRoute component= { League } />
		<Route path='/team' component= { TeamView } />
		<Route path='/nba/standings' component= { NBAStandingsView } />
	</Route>
);

