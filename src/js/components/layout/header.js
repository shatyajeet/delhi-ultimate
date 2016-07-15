import React from 'react';
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';

import './header.scss';

const iconElementRight = (
	<ul className="right-nav">
		<li><Link to="#">About</Link></li>
		<li><Link to="http://www.facebook.com/DelhiUltimate/">Contact Us</Link></li>
		<li><Link to="http://delhiultimateblog.wordpress.com/">Blog</Link></li>
	</ul>
);

const Header = () => {
	const logo = require('img!../../../img/logo.png');
  return (
  	<div>
			<AppBar
				className='top-nav white'
				title={<div className="mar-l10 black-text"><Link activeClassName='black-text' to='/'>Delhi Ultimate</Link></div>}
				iconElementLeft={<img className="logo" src={logo} />}
				iconElementRight={iconElementRight}
				iconStyleLeft={{margin: '8px 0 0'}}
				iconStyleRight={{margin: 0}} />
		</div>
  );
};

export default Header;
