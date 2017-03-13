import React from 'react';
import './header.css';
import jumpmanLogo from './jumpman-logo-white.png';

function Header(){
	return (
		<nav className='navbar navbar-default' >
			<div className='container-fluid' >
				<img className="navBarImg" src={jumpmanLogo} alt='Jordan Jumpman Logo'/>
			</div>
		</nav>
	)
}

export default Header;