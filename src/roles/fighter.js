const inventory = require("../npc/functions/inventory.js");
const statGen = require("../npc/functions/randomStat.js");
const wTags = {
	"names": [],
	"simple": true,
	"martial": true,
};
const aTags = {
	"types": ["light", "medium", "heavy"],
	"metal": true,
	"shield": true,
};
const skills = {
	mainStat: "strength",
	secondStat: "dexterity",
	saveThrow: "constitution",
	miscStats: ["intelligence", "wisdom", "charisma"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Fighter",
		link: "https://www.dndbeyond.com/classes/fighter",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
		backgrounds: ["Gladiator", "Folk Hero", "Haunted One", "Outlander", "Knight", "Noble", "Sailor", "Soldier"],
	};
	return role;
};
