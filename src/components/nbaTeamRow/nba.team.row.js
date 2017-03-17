import React from 'react';
import nbaLogosPNG from '../../../assests/nbaLogos/teams-nba-sprite.png';

export default function(props){
	// Create bootstrap column classes
	let bootStrapSizes = ['lg','md','sm','xs'];
	let bootStrapColumns = bootStrapSizes.map((size) =>{
		return 'col-' + size + '-4';
	})
	let bootStrapColClasses = bootStrapColumns.join(' ');
	// Create style obj for nba logo images
	let nbaLogoBGPNG = { backgroundImage: `url(${nbaLogosPNG})`}
	return (
		<div className='row'>
			<div 
 				className={ bootStrapColClasses + ' ' + props.team.abbr }
 				style={ nbaLogoBGPNG }
 			>
 			</div>
			<div className={ bootStrapColClasses } >
				{ props.team.name }
			</div>
			<div className={ bootStrapColClasses + ' wins'}>
				{ props.team.wins }
			</div>
		</div>
	)
}