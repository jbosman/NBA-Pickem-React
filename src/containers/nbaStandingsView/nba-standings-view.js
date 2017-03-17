import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import NBA_Team_Row from '../../components/nbaTeamRow/nba.team.row';

class NBAStandingsView extends Component {
	
	renderNBATeams(){

		let NBA_teams_objs = [];
		for( let nbaTeam in this.props.nba_teams_info ){
			NBA_teams_objs.push(this.props.nba_teams_info[nbaTeam]);
		}

		let NBA_teams_sorted = _.orderBy( NBA_teams_objs, "wins", "desc");

		return NBA_teams_sorted.map( (nbaTeam) => {
			return <NBA_Team_Row team={nbaTeam} key={nbaTeam.abbr} />
		});
	}

	render(){
		return (
			<div className='container'>
				{ this.renderNBATeams() }
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		nba_teams_info: state.league.nba_teams_info
	}
}

export default connect(mapStateToProps)(NBAStandingsView);