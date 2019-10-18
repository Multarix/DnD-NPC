const raceGen = require("./chosenRace.js");
const roleGen = require("./chosenRole.js");
const nameGen = require("../name/nameGen.js");
module.exports = (data) => {
	const race = raceGen(data.race);
	const role = roleGen(data.role, race);
	const character = nameGen(race.name);

	return {
		character: {
			name: character.name,
			gender: character.gender,
		},
		race: {
			name: race.name,
			link: `https://www.dndbeyond.com/races/${race.link}`,
			small: race.small,
			speed: race.speed,
		},
		class: {
			name: role.name,
			stats: {
				strength: role.stats.strength + race.stats.strength,
				dexterity: role.stats.dexterity + race.stats.dexterity,
				constitution: role.stats.constitution + race.stats.constitution,
				intelligence: role.stats.intelligence + race.stats.intelligence,
				wisdom: role.stats.wisdom + race.stats.wisdom,
				charisma: role.stats.charisma + race.stats.charisma,
			},
		},
		inventory: {
			armor: role.inventory.armor,
			weapon: role.inventory.weapon,
			tools: role.inventory.tools,
		},
	};
};
