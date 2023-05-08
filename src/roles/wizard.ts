import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";


type statType = "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma";
interface AbilityPriority {
	mainStat: statType
	secondStat: statType | false
	saveThrow: statType
	miscStats: statType[]
}

interface Stats {
	strength: number
	dexterity: number
	constitution: number
	intelligence: number
	wisdom: number
	charisma: number
}

interface RaceData {
	name: string
	link: string
	disposition: string[]
	speed: number
	size: string
	maxAge: number
	minAge: number
	stats: Stats
}


const weaponTags = {
	"names": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
	"simple": false,
	"martial": false
};

const armorTags = {
	"types": [],
	"metal": true,
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