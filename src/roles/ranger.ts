import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";


import { AbilityPriority, RaceData } from "../../interfaces.js";


const weaponTags = {
	"names": [],
	"simple": true,
	"martial": true
};

const armorTags = {
	"types": ["light", "medium"],
	"metal": true,
	"shield": true
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
		name: "Ranger",
		link: "https://www.dndbeyond.com/classes/ranger",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral"],
		backgrounds: ["Folk Hero", "Soldier", "Noble", "Hermit", "Haunted One"]
	};
	return role;
};
