import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'; 
import { Link } from 'react-router';
import { fetchLeague } from '../actions/league.action';
import { selectTeam } from '../actions/team.action';

class League extends Component {

	componentWillMount(){
		this.props.fetchLeague();  
	}

	updateTeam(teamId){
		this.props.selectTeam(teamId);
		browserHistory.push('/team');
	}

	renderTeamsInLeague(){
		return (
			this.props.teams.map( (team, i) => {
				return (
					<li onClick={this.updateTeam.bind(this, i)} key={i}> { team.name }'s Team</li>
				)
			})
		)
	}

	render() {

		if(this.props.teams.length < 1) return <div>Loading...</div>

		return (
			<div>
				<ul>{ this.renderTeamsInLeague() }</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { teams: state.league.all };
}

export default connect( mapStateToProps, { fetchLeague, selectTeam } )(League);
