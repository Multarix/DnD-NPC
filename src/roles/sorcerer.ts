import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";


import { AbilityPriority, RaceData } from "../../interfaces.js";


const weaponTags = {
	"names": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
	"simple": false,
	"martial": false
};

const armorTags = {
	"types": [],
	"shield": false
};

const skills: AbilityPriority = {
	mainStat: "charisma",
	secondStat: false,
	saveThrow: "constitution",
	miscStats: ["strength", "dexterity", "intelligence", "wisdom"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags);
	const role = {
		name: "Sorcerer",
		link: "https://www.dndbeyond.com/classes/sorcerer",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
		backgrounds: ["Acolyte", "Folk Hero", "Haunted One", "Hermit", "Sage", "Guild Artisan", "Guild Merchant", "Outlander", "Entertainer"]
	};
	return role;
};
