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
	secondStat: "charisma",
	saveThrow: "wisdom",
	miscStats: ["dexterity", "constitution", "intelligence"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags);
	const role = {
		name: "Paladin",
		link: "https://www.dndbeyond.com/classes/paladin",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful"],
		backgrounds: ["Acolyte", "Sage", "Folk Hero", "Soldier", "Knight"]
	};
	return role;
};
