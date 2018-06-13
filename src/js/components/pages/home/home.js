import React from 'react';

import './home.scss';

const Home = () => {
  return (
    <div>
			<div className="banner-image">
        <img alt='banner' src='http://res.cloudinary.com/dhahnivds/image/upload/c_crop,h_912,y_152/v1528881163/banner_btixti.jpg' />
      </div>
			<div className="container">
				<div className="center">
					<h3>Delhi Ultimate</h3>
					<p>Home of the Ultimate Frisbee teams of Delhi NCR!</p>
				</div>
				<div>
					<p>Delhi Ultimate has been growing in heaps and bounds over past few years. The community has been transitioning and developing into something bigger and special. It has grown from being a community of one team to now many fold.</p>
				</div>
			</div>
    </div>
  );
};

export default Home;
