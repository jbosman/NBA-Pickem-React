import React, { Component } from 'React';
import { connect } from 'react-redux';

class TeamView extends Component {

	renderNBATeams(){
		return (
		 	this.props.team.nba_teams.map( (nbaTeam, i) => {
		 		return (
		 			<div className='row'>
			 			<div className='col-lg-6'>
			 				{ this.props.nba_teams_info[nbaTeam].name }
			 			</div>
			 			<div className='col-lg-6'>
			 				{ this.props.nba_teams_info[nbaTeam].wins }
			 			</div>
			 		</div>
		 		)
			})
		)
	}

	renderTeamWinsTotal(){
		let sumOfTeamWins = this.props.team.nba_teams.reduce( (acc, nbaTeam) => {
			return acc + this.props.nba_teams_info[nbaTeam].wins;
		}, 0)

		return (
			<div>Total Wins: { sumOfTeamWins }</div>
		)
	}

	render(){
		if( !this.props.team ) return <div>First select a team from the League tab.</div>
		
		return (
			<div class='container'>
				<h1>{ this.props.team.name }'s Team</h1>
				<div>{ this.renderNBATeams() }</div>
				<div className='totalWins'>{ this.renderTeamWinsTotal() }</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { 
		team: state.league.selectedTeam,
		nba_teams_info: state.league.nba_teams_info
	}
}

export default connect(mapStateToProps)(TeamView);