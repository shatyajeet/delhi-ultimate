import React from 'react';

import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="jumbotron">
        <div className="jumbotron-overlay" />
        <div className="jumbotron-content">
          <div className="jumbotron-content__text">
            Home of the Ultimate Frisbee teams of Delhi NCR
          </div>
          <button className="mdc-button mdc-button--raised">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
