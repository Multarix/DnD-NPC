const inventory = require("../npc/functions/inventory.js");
const statGen = require("../npc/functions/randomStat.js");
const wTags = {
	"names": [],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": ["light", "medium"],
	"metal": true,
	"shield": true,
};
const skills = {
	mainStat: "wisdom",
	secondStat: false,
	saveThrow: "charisma",
	miscStats: ["strength", "dexterity", "constitution", "intelligence"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Cleric",
		link: "https://www.dndbeyond.com/classes/cleric",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Chaotic"],
	};
	return role;
};
