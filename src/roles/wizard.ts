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
	mainStat: "intelligence",
	secondStat: false,
	saveThrow: "wisdom",
	miscStats: ["strength", "dexterity", "constitution", "charisma"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags);
	const role = {
		name: "Wizard",
		link: "https://www.dndbeyond.com/classes/wizard",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
		backgrounds: ["Acolyte", "Folk Hero", "Haunted One", "Hermit", "Sage", "Guild Artisan", "Guild Merchant", "Outlander"]
	};
	return role;
};