const inventory = require("../functions/inventory.js");
const statGen = require("../functions/randomStat.js");
const wTags = {
	"names": [],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": ["light"],
	"metal": true,
	"shield": false,
};
const skills = {
	mainStat: "charisma",
	secondStat: false,
	saveThrow: "wisdom",
	miscStats: ["strength", "dexterity", "constitution", "intelligence"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Warlock",
		link: "https://www.dndbeyond.com/classes/warlock",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
	};
	return role;
};
