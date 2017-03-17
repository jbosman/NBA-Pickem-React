import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import nbaLogos from '../../../assests/nbaLogos/teams-nba-sprite.png';

class NBAStandingsView extends Component {
	
	renderNBATeams(){

		let NBA_teams_objs = [];
		for( let nbaTeam in this.props.nba_teams_info ){
			NBA_teams_objs.push(this.props.nba_teams_info[nbaTeam]);
		}

		let NBA_teams_sorted = _.orderBy( NBA_teams_objs, "wins", "desc");

		return NBA_teams_sorted.map( (nbaTeam, i) => {
			let imgClass = `col-lg-4 ${nbaTeam.abbr}`;
		 		let imgStyle = { backgroundImage: `url(${nbaLogos})` }
			return (
				<div className='row' key={i}>
					<div 
		 				className={imgClass} 
		 				style={imgStyle}>
		 			</div>
					<div className='col-lg-4'>
						{ nbaTeam.name }
					</div>
					<div className='col-lg-4 wins'>
						{ nbaTeam.wins }
					</div>
				</div>
			)
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