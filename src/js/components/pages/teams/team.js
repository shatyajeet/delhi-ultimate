/**
 * Created by shatyajeet on 17/7/16.
 */

import React from 'react';

import {getTeamFromSlug} from '../../../utils/teamUtils';

const Team = (props) => {
	let teamSlug = props.params.team;
	let team = getTeamFromSlug(teamSlug);
	console.log(team);
	return (
		<div className="container">
			Team
		</div>
	);
};

export default Team;
