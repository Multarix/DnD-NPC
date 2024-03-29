import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";


import { AbilityPriority, RaceData } from "../../interfaces.js";


const weaponTags = {
	"names": ["Club", "Dagger", "Dart", "Javelin", "Mace", "Quarterstaff", "Scimitar", "Sickle", "Sling", "Spear"],
	"simple": false,
	"martial": false
};

const armorTags = {
	"types": ["light", "medium"],
	"shield": true
};

const skills: AbilityPriority = {
	mainStat: "wisdom",
	secondStat: false,
	saveThrow: "intelligence",
	miscStats: ["strength", "dexterity", "constitution", "charisma"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags, true);
	const role = {
		name: "Druid",
		link: "https://www.dndbeyond.com/classes/druid",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral"],
		backgrounds: ["Acolyte", "Hermit", "Sage", "Outlander", "Folk Hero"]
	};
	const tools = { name: "Herbalism Kit", link: "https://www.dndbeyond.com/equipment/herbalism-kit" };
	role.inventory.tools.push(tools);
	return role;
};
