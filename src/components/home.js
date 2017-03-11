import React, { Component } from 'react';

export default class Home extends Component {
	render(){
		return (
			<div>
				<div>This is the Menu</div>
				{ this.props.children }
			</div>
		)
	}
}