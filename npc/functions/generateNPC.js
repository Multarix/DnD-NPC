const raceGen = require("./chosenRace.js");
const roleGen = require("./chosenRole.js");
const disposition = require("./disposition.js");
const charGen = require("./charGen.js");
module.exports = (data) => {
	const race = raceGen(data.raceType);
	const role = roleGen(data.roleType, race);
	const alignment = disposition(race.disposition, role.disposition);
	const character = charGen(race.name, alignment);

	return {
		character: character,
		race: {
			name: race.name,
			link: race.link,
			size: race.size,
			speed: race.speed,
		},
		class: {
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
