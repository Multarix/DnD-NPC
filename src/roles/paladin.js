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
	secondStat: "charisma",
	saveThrow: "wisdom",
	miscStats: ["dexterity", "constitution", "intelligence"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Paladin",
		link: "https://www.dndbeyond.com/classes/paladin",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful"],
		backgrounds: ["Acolyte", "Sage", "Folk Hero", "Soldier", "Knight"],
	};
	return role;
};
