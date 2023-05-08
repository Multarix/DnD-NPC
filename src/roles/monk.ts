import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
import musical from "../objects/musicalInstruments.json" assert { type: "json" };
import artisan from "../objects/artisanTools.json" assert { type: "json" };


import { AbilityPriority, RaceData } from "../functions/interfaces.js";


const weaponTags = {
	"names": ["Shortsword"],
	"simple": true,
	"martial": false
};

const armorTags = {
	"types": [],
	"metal": true,
	"shield": false
};

const skills: AbilityPriority = {
	mainStat: "dexterity",
	secondStat: "wisdom",
	saveThrow: "strength",
	miscStats: ["constitution", "intelligence", "charisma"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags);
	const role = {
		name: "Monk",
		link: "https://www.dndbeyond.com/classes/monk",
		stats: stats,
		inventory: gear,
		disposition: ["Neutral"],
		backgrounds: ["Acoylte", "Haunted One", "Hermit", "Sage"]
	};

	let n = Math.floor(Math.random() * artisan.length);
	const tool = artisan[n];
	n = Math.floor(Math.random() * musical.length);
	const instrument = musical[n];
	const item = (Math.random() > 0.5) ? instrument : tool;
	role.inventory.tools.push(item);
	return role;
};
