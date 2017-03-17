import React, { Component } from 'React';
import { connect } from 'react-redux';
import _ from 'lodash';

class TeamView extends Component {

	renderNBATeams(){

		// Create an array of objects that contains the individual's teams' info
		// Each obj contains the nba team name and it's number of wins i.e. { name: '...', wins: 72 }
		let team_NBA_teams_objs = this.props.team.nba_teams.map( (nbaTeam, i) => {
			return this.props.nba_teams_info[nbaTeam];
		})

		// Sort those objects by wins to be displayed in descending order
		let team_NBA_teams_objs_sorted = _.orderBy( team_NBA_teams_objs, "wins", "desc" )

		return (
		 	team_NBA_teams_objs_sorted.map( (nbaTeam, i) => {
		 		return (
		 			<div className='row' key={i} >
			 			<div className='col-lg-6'>
			 				{ nbaTeam.name }
			 			</div>
			 			<div className='col-lg-6 wins'>
			 				{ nbaTeam.wins }
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
			<div className='row'>
				<div id='totalWinsText' className='col-lg-6'>Total Wins: </div>
	 			<div id='winsNumber' className='col-lg-6 wins'>{ sumOfTeamWins }</div>
			</div>
		)
	}

	render(){
		if( !this.props.team ) return <div>First select a team from the League tab.</div>
		
		return (
			<div className='container'>
				<h1>{ this.props.team.name }'s Team</h1>
				<div>{ this.renderNBATeams() }</div>
				<div>{ this.renderTeamWinsTotal() }</div>
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