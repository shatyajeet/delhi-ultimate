/**
 * Created by shatyajeet on 16/7/16.
 */

import React from 'react';
import {Link} from 'react-router';

import {getTeams, getTeamSlug} from '../../../utils/teamUtils';

import './teams.scss';

const teams = getTeams();

const Team = ({
	team
}) => {
	return (
		<div className="col l4">
			<Link to={`/team/${getTeamSlug(team.name)}`}>
				<div className="team-thumb">
					<img className="responsive-img" src={team.img} />
					<div className="overlay center white-text">{team.name}</div>
				</div>
			</Link>
		</div>
	);
};

class Teams extends React.Component {
	render () {
		return (
			<div className="container">
				<h3 className="center">Teams</h3>
				<div className="row">
					{teams.map((team, index) => {
						return <Team key={index} team={team} />
					})}
				</div>
			</div>
		);
	}
};

export default Teams;
