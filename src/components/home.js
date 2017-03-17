import React, { Component } from 'react';
import Header from './header/header';
import TabMenu from '../containers/tabMenu/tabMenu';

export default class Home extends Component {
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