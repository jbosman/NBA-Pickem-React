export function scrapeESPN_HTML(nbaPage){
	let teamTokenizer = '<span class="team-names">';
	let teamTokens = nbaPage.split(teamTokenizer);
	let nbaTeamsInfo = [];
	let nbaTeamObj = {};

	for (let i = 1; i < teamTokens.length; i++ ){ // starting at 1 here because the first token is garbage
		nbaTeamsInfo.push(parseTeamInfo( teamTokens[i]) );
	}

	nbaTeamsInfo.forEach( (teamInfo) => {
		nbaTeamObj[teamInfo.abbr] = { name: teamInfo.name, wins: Number(teamInfo.wins)  };
	})


	return nbaTeamObj;
}

function parseTeamInfo(teamInfoStr){

	let teamInfo = {};
	// Parse team name
	let endOfTeamNameLoc = teamInfoStr.indexOf('</span>');
	teamInfo.name = teamInfoStr.slice(0, endOfTeamNameLoc);

	// Parse abbreviated team name
	let abbrTagStart = '<abbr title="' + teamInfo.name + '">';
	let abbrTagEnd = '</abbr>';
	teamInfo.abbr = teamInfoStr.slice( teamInfoStr.indexOf(abbrTagStart) + abbrTagStart.length, teamInfoStr.indexOf(abbrTagEnd));

	// Parse team wins
	let winsArr = teamInfoStr.split('class="">')
	let wins = winsArr[1].slice(0, winsArr[1].indexOf('</td>'));
	teamInfo.wins = wins;

	return teamInfo;
}