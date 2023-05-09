import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";


import { AbilityPriority, RaceData } from "../../interfaces.js";


const weaponTags = {
	"names": [],
	"simple": true,
	"martial": true
};

const armorTags = {
	"types": ["light", "medium", "heavy"],
	"metal": true,
	"shield": true
};

const skills: AbilityPriority = {
	mainStat: "strength",
	secondStat: "dexterity",
	saveThrow: "constitution",
	miscStats: ["intelligence", "wisdom", "charisma"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags);
	const role = {
		name: "Fighter",
		link: "https://www.dndbeyond.com/classes/fighter",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
		backgrounds: ["Gladiator", "Folk Hero", "Haunted One", "Outlander", "Knight", "Noble", "Sailor", "Soldier"]
	};
	return role;
};
