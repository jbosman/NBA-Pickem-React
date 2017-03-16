
export const SELECT_TEAM = 'FETCH_TEAM';

export function selectTeam(teamId){
	return{
		type: SELECT_TEAM,
		payload: teamId
	}
}