import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";


import { AbilityPriority, RaceData } from "../../interfaces.js";


const weaponTags = {
	"names": ["Hand Crossbow", "Longsword", "Mace", "Rapier", "Shortsword"],
	"simple": true,
	"martial": false
};

const armorTags = {
	"types": ["light"],
	"shield": false
};

const skills: AbilityPriority = {
	mainStat: "dexterity",
	secondStat: false,
	saveThrow: "intelligence",
	miscStats: ["strength", "constitution", "wisdom", "charisma"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags);
	const role = {
		name: "Rogue",
		link: "https://www.dndbeyond.com/classes/rogue",
		stats: stats,
		inventory: gear,
		disposition: ["Neutral", "Chaotic"],
		backgrounds: ["Criminal", "Spy", "Urchin", "Pirate"]
	};
	const tools = { name: "Thieves Tools", link: "https://www.dndbeyond.com/equipment/thieves-tools" };
	role.inventory.tools.push(tools);
	return role;
};
