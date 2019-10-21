const inventory = require("../npc/functions/inventory.js");
const statGen = require("../npc/functions/randomStat.js");
const wTags = {
	"names": [],
	"simple": true,
	"martial": true,
};
const aTags = {
	"types": ["light", "medium"],
	"metal": true,
	"shield": true,
};
const skills = {
	mainStat: "strength",
	secondStat: false,
	saveThrow: "constitution",
	miscStats: ["dexterity", "intelligence", "wisdom", "wisdom"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Barbarian",
		link: "https://www.dndbeyond.com/classes/barbarian",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
	};
	return role;
};
