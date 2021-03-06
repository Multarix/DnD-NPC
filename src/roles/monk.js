const inventory = require("../npc/functions/inventory.js");
const statGen = require("../npc/functions/randomStat.js");
const musical = require("../npc/objects/musicalInstruments.json");
const artisan = require("../npc/objects/artisanTools.json");
const wTags = {
	"names": ["Shortsword"],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": [],
	"metal": true,
	"shield": false,
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
		name: "Monk",
		link: "https://www.dndbeyond.com/classes/monk",
		stats: stats,
		inventory: gear,
		disposition: ["Neutral"],
		backgrounds: ["Acoylte", "Haunted One", "Hermit", "Sage"],
	};

	let n = Math.floor(Math.random() * artisan.length);
	const tool = artisan[n];
	n = Math.floor(Math.random() * musical.length);
	const instrument = musical[n];
	const item = (Math.random() > 0.5) ? instrument : tool;
	role.inventory.tools.push(item);
	return role;
};
