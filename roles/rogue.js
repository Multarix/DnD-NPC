const inventory = require("./items/inventory.js");
const statGen = require("../functions/randomStat.js");
const wTags = {
	"names": ["Hand Crossbow", "Longsword", "Mace", "Rapier", "Shortsword"],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": ["light"],
	"metal": true,
	"shield": false,
};
const skills = {
	mainStat: "dexterity",
	secondStat: false,
	saveThrow: "intelligence",
	miscStats: ["strength", "constitution", "wisdom", "charisma"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Rogue",
		stats: stats,
		inventory: gear,
	};
	const tools = { name: "Thieves Tools", link: "https://www.dndbeyond.com/equipment/thieves-tools" };
	role.inventory.tools.push(tools);
	return role;
};
