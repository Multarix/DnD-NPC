const inventory = require("./items/inventory.js");
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
		stats: stats,
		inventory: gear,
	};
	return role;
};
