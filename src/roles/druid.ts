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
	"names": ["Club", "Dagger", "Dart", "Javelin", "Mace", "Quarterstaff", "Scimitar", "Sickle", "Sling", "Spear"],
	"simple": false,
	"martial": false
};

const armorTags = {
	"types": ["light", "medium"],
	"metal": false,
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
	const gear = inventory(race, strength, weaponTags, armorTags);
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
