import React, { Component } from 'react';
import { Link } from 'react-router';

import './tabMenu.css';

class TabMenu extends Component {

	getTabMenuDetails(){
		return [
			{ label: 'League', link: '/' },
			{ label: 'Team', link: '/team' },
			{ label: 'NBA Standings', link: '/nba/standings' }
		]
	}

	renderMenuTabs(){
		return this.getTabMenuDetails().map( (tabObj, i) => {
			return (
				<li key={i} role='presentation'>
					<Link to={ tabObj.link } >
						{ tabObj.label }
					</Link>
				</li>
			)
		})
	}

	render(){
		return (
			<ul className="nav nav-tabs">
			  { this.renderMenuTabs() }
			</ul>
		)
	}
}

export default TabMenu;