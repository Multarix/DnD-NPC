const raceGen = require("./chosenRace.js");
const roleGen = require("./chosenRole.js");
const charGen = require("./charData.js");
module.exports = (data) => {
	const race = raceGen(data.raceType);
	const role = roleGen(data.roleType, race);
	const character = charGen(race, role);

	return {
		character: character,
		race: {
			name: race.name,
			link: race.link,
			size: race.size,
			speed: race.speed,
		},
		role: {
			name: role.name,
			link: role.link,
			stats: {
				strength: role.stats.strength + race.stats.strength,
				dexterity: role.stats.dexterity + race.stats.dexterity,
				constitution: role.stats.constitution + race.stats.constitution,
				intelligence: role.stats.intelligence + race.stats.intelligence,
				wisdom: role.stats.wisdom + race.stats.wisdom,
				charisma: role.stats.charisma + race.stats.charisma,
			},
		},
		inventory: role.inventory,
	};
};
