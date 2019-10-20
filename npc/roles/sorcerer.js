const inventory = require("./items/inventory.js");
const statGen = require("../functions/randomStat.js");
const wTags = {
	"names": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
	"simple": false,
	"martial": false,
};
const aTags = {
	"types": [],
	"metal": true,
	"shield": false,
};
const skills = {
	mainStat: "charisma",
	secondStat: false,
	saveThrow: "constitution",
	miscStats: ["strength", "dexterity", "intelligence", "wisdom"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Sorcerer",
		link: "https://www.dndbeyond.com/classes/sorcerer",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
	};
	return role;
};
