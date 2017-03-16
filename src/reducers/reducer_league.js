import { FETCH_LEAGUE } from '../actions/league.action';
import { SELECT_TEAM } from '../actions/team.action';

const INITIAL_STATE = { all: [], selectedTeam: null };

export default function( state = INITIAL_STATE, action ){
	switch(action.type){
		case FETCH_LEAGUE:
			return Object.assign( {}, state, { all: action.payload.data } );
		case SELECT_TEAM:
			return Object.assign( {}, state, { selectedTeam: state.all[action.payload] })
		default:
			return state;
	}
} 