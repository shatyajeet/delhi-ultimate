import React from 'react';

import './home.scss';

const teams = [
	{name: 'Ashoka', img: require('img!../../../../img/ashoka.jpg')},
	{name: 'GK MAD', img: require('img!../../../../img/gk-mad.jpg')},
	{name: 'Hawabaaz', img: require('img!../../../../img/hawabaaz.jpg')},
	{name: 'Stray Dogs in Sweaters', img: require('img!../../../../img/stray-dogs.jpg')},
	{name: 'Underdogs', img: require('img!../../../../img/underdogs.jpg')},
	{name: 'Gurgaon Ultimate', img: require(`../../../../img/gurgaon.jpg`)},
	{name: 'Gulmohar Ultimate', img: 'http://placehold.it/270x180?text=Pic+Not+Available'}
];

const Team = ({
	team
}) => {
	return (
		<div className="col l3">
			<div className="team-thumb">
				<img className="responsive-img" src={team.img} />
				<div className="overlay center white-text">{team.name}</div>
			</div>
		</div>
	);
};

const Home = () => {
  return (
    <div>
			<div className="banner-image"></div>
			<div className="container">
				<div className="center">
					<h3>Delhi Ultimate</h3>
					<p>Home of the Ultimate Frisbee teams of Delhi NCR!</p>
				</div>
				<div>
					<p>Delhi Ultimate has been growing in heaps and bounds over past few years. The community has been transitioning and developing into something bigger and special. It has grown from being a community of one team to now many fold.</p>
					<p>There are quite a few teams fighting to be the best ultimate frisbee team in the NCR Region.</p>
					<h4 className="center">Teams</h4>
					<div className="row">
						{teams.map((team, index) => {
							return <Team key={index} team={team} />
						})}
					</div>
				</div>
			</div>
    </div>
  );
};

export default Home;
