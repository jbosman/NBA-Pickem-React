import axios from 'axios';

export const FETCH_LEAGUE = "FETCH_LEAGUE";

const ROOT_URL = '/api/league';

export function fetchLeague(){

	const request = axios.get(`${ROOT_URL}`);

	return {
		type: FETCH_LEAGUE, 
		payload: request
	}
}

