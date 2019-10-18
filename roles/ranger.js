const inventory = require("./items/inventory.js");
const statGen = require("../functions/randomStat.js");
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
	mainStat: "dexterity",
	secondStat: "wisdom",
	saveThrow: "strength",
	miscStats: ["constitution", "intelligence", "charisma"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Ranger",
		stats: stats,
		inventory: gear,
	};
	return role;
};
