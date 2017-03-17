import React, { Component } from 'react';
import Header from '../header/header';
import TabMenu from '../../containers/tabMenu/tabMenu';
import nbaLogos from '../../../assests/nbaLogos/teams-nba-sprite.png';
import '../../../assests/nbaLogos/nbaLogos.css';
import './childrenViews.css';


export default class Root extends Component {
	render(){
		return (
			<div>
				<Header />
				<div className='container' >
					<TabMenu />
					<div className='container'>
					{ this.props.children }
					</div>
				</div>
			</div>
		)
	}
}