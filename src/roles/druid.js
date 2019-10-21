const inventory = require("./items/inventory.js");
const statGen = require("../functions/randomStat.js");
const wTags = {
	"names": ["Club", "Dagger", "Dart", "Javelin", "Mace", "Quarterstaff", "Scimitar", "Sickle", "Sling", "Spear"],
	"simple": false,
	"martial": false,
};
const aTags = {
	"types": ["light", "medium"],
	"metal": false,
	"shield": true,
};
const skills = {
	mainStat: "wisdom",
	secondStat: false,
	saveThrow: "intelligence",
	miscStats: ["strength", "dexterity", "constitution", "charisma"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Druid",
		link: "https://www.dndbeyond.com/classes/druid",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral"],
	};
	const tools = { name: "Herbalism Kit", link: "https://www.dndbeyond.com/equipment/herbalism-kit" };
	role.inventory.tools.push(tools);
	return role;
};
