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
	"names": ["Hand Crossbow", "Longsword", "Mace", "Rapier", "Shortsword"],
	"simple": true,
	"martial": false
};

const armorTags = {
	"types": ["light"],
	"metal": true,
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
