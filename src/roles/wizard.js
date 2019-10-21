const inventory = require("../npc/functions/inventory.js");
const statGen = require("../npc/functions/randomStat.js");
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
	mainStat: "intelligence",
	secondStat: false,
	saveThrow: "wisdom",
	miscStats: ["strength", "dexterity", "constitution", "charisma"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Wizard",
		link: "https://www.dndbeyond.com/classes/wizard",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
	};
	return role;
};
