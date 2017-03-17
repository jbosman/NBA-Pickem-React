import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'; 
import { Link } from 'react-router';
import { fetchLeague } from '../actions/league.action';
import { selectTeam } from '../actions/team.action';
import { fetchNBATeamInfo } from '../actions/nba.team.action';

class League extends Component {

	componentWillMount(){
		this.props.fetchLeague()
		this.props.fetchNBATeamInfo();
	}

	updateTeam(teamId){
		this.props.selectTeam(teamId);
		browserHistory.push('/team');
	}

	sumTeamWins(team){
		return team.nba_teams.reduce( (acc, teamAbbr) => {
			return acc + this.props.nba_teams_info[teamAbbr].wins;
		}, 0 )
	}

	renderTeamsInLeague(){
		return ( 
			this.props.teams.map( (team, i) => {
				return (
					<div className='row' key={i}>
						<div className='col-lg-6'> 
							<a onClick={this.updateTeam.bind(this, i)}>{ team.name }'s Team</a>
						</div>
						<div className='col-lg-6'>
							{ this.sumTeamWins(team) }
						</div>
					</div>
				)
			})
		)
	}

	render() {

		if( this.props.teams.length < 1 || !Object.keys(this.props.nba_teams_info).length ){
			return <div>Loading...</div>
		} 

		return (	
			<div className='container'>
				{ this.renderTeamsInLeague() }
			</div>
		)
	}
}

function mapStateToProps(state){
	console.log('state: ', state)
	return { 
		teams: state.league.league_teams,
		nba_teams_info:  state.league.nba_teams_info
	};
}

export default connect( mapStateToProps, { fetchLeague, selectTeam, fetchNBATeamInfo } )(League);
