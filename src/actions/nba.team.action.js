import axios from 'axios';

export const NBA_TEAM_WINS_FETCH = 'NBA_TEAM_WINS_FETCH';

export function fetchNBATeamInfo(){

	const ESPN_URL = 'http://www.espn.com';
	const NBA_STANDINGS_API_2017 = '/nba/standings/_/group/league/2017';

	const request = axios.get( `${ESPN_URL}${NBA_STANDINGS_API_2017}` );

	return {
		type: NBA_TEAM_WINS_FETCH,
		payload: request
	}

}