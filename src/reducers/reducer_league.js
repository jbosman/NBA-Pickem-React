import { FETCH_LEAGUE } from '../actions/league.action';
import { SELECT_TEAM } from '../actions/team.action';
import { NBA_TEAM_WINS_FETCH } from '../actions/nba.team.action';
import { scrapeESPN_HTML } from '../utilities/espn.scrape';

const INITIAL_STATE = { league_teams: [], selectedTeam: null, nba_teams_info:{} };

export default function( state = INITIAL_STATE, action ){
	switch(action.type){
		case FETCH_LEAGUE:
			return Object.assign( {}, state, { league_teams: action.payload.data } );
		case SELECT_TEAM:
			return Object.assign( {}, state, { selectedTeam: state.league_teams[action.payload] });
		case NBA_TEAM_WINS_FETCH:
			return Object.assign( {}, state, { nba_teams_info: scrapeESPN_HTML(action.payload.data) } )
		default:
			return state;
	}

} 
