import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'; 
import { Link } from 'react-router';
import { fetchLeague } from '../actions/league.action';
import { selectTeam } from '../actions/team.action';
import { fetchNBATeamInfo } from '../actions/nba.team.action';
import _ from 'lodash';

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

		// Create an array of objects which contains the individual team names and their total number of wins
		// Special note here for the leagueId. This is needed to render the correct team when it's clicked on.
		// Because the teams are being sorted by wins here we loose the original database order.
		let league_teams_objs = this.props.teams.map( (team, i) => {
			return { name: team.name, wins: this.sumTeamWins(team), leagueId: i };
		});

		// Sort those objects in descending order
		let league_teams_objs_sorted = _.orderBy( league_teams_objs, "wins", "desc" );

		return ( 
			league_teams_objs_sorted.map( (team, i) => {
				return (
					<div className='row' key={i}>
						<div className='col-lg-6'> 
							<a onClick={this.updateTeam.bind(this, team.leagueId)}>{ team.name }'s Team</a>
						</div>
						<div className='col-lg-6'>
							{ team.wins }
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
	return { 
		teams: state.league.league_teams,
		nba_teams_info:  state.league.nba_teams_info
	};
}

export default connect( mapStateToProps, { fetchLeague, selectTeam, fetchNBATeamInfo } )(League);
