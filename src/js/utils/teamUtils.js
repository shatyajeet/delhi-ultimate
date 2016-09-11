/**
 * Created by shatyajeet on 16/7/16.
 */

let {teams} = require('json!../../../teams.json');

const getTeams = () => {
	return teams.map((team) => {
		let {img} = team;
		img = require('img-loader!' + '../../img/' + img);
		return Object.assign({}, team, {
			img
		});
	});
};

const getTeamSlug = (teamName) => (
	teamName.toLowerCase()
		.replace(' ', '-')
);

const getTeamFromSlug = (slug) => {
	for (let teamObj of teams) {
		if (getTeamSlug(teamObj.name) === slug) {
			return teamObj;
		}
	}
};

export {
	getTeams,
	getTeamSlug,
	getTeamFromSlug
};
