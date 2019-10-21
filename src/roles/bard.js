const inventory = require("../functions/inventory.js");
const statGen = require("../functions/randomStat.js");
const music = require("../objects/musicalInstruments.json");
const wTags = {
	"names": ["Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
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
	saveThrow: "dexterity",
	miscStats: ["strength", "constitution", "intelligence", "wisdom"],
};
module.exports = (race) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, wTags, aTags);
	const role = {
		name: "Bard",
		link: "https://www.dndbeyond.com/classes/bard",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
	};

	const musical = [...music];
	const items = [];
	for(let i = 0; i < 3; i++){
		const n = Math.floor(Math.random() * musical.length);
		const instrument = musical[n];
		role.inventory.tools.push(instrument);
		musical.splice(musical.indexOf(instrument), 1);
	}
	return role;
};
