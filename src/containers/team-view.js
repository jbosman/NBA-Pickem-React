import React, { Component } from 'React';
import { connect } from 'react-redux';

class TeamView extends Component {

	renderNBATeams(){
		console.log(this.props.team)
		return (
		 	this.props.team.nba_teams.map( (nbaTeam, i) => {
		 		return <li key={i}> { nbaTeam } </li>;
			})
		)
	}

	render(){
		if( !this.props.team ) return <div>First select a team from the League tab.</div>
		
		return (
			<div>
				<h1>{ this.props.team.name }'s Team</h1>
				<ul>
					{ this.renderNBATeams() }
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { team: state.league.selectedTeam }
}

export default connect(mapStateToProps)(TeamView);