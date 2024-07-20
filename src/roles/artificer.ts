import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
import fs from "fs";


import { AbilityPriority, RaceData } from "../../interfaces.js";


import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


// Rather than rely on "import assert", just use fs and JSON.parse()
const artisanText = fs.readFileSync(path.resolve(__dirname, "../objects/artisanTools.json"), "utf8");
const artisanTools = JSON.parse(artisanText);


const weaponTags = {
	"names": [],
	"simple": true,
	"martial": false
};

const armorTags = {
	"types": ["light", "medium"],
	"shield": true
};

const skills: AbilityPriority = {
	mainStat: "intelligence",
	secondStat: false,
	saveThrow: "constitution",
	miscStats: ["strength", "dexterity", "wisdom", "charisma"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags);
	const role = {
		name: "Artificer",
		link: "https://www.dndbeyond.com/classes/artificer",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
		backgrounds: ["Guild Artisan", "Hermit", "Outlander", "Sage", "Soldier"] // Couldn't find much on the Artificer's backgrounds
	};

	const items = [...artisanTools]; // Make a copy
	const thievesTools = { name: "Thieves' Tools", link: "https://www.dndbeyond.com/equipment/thieves-tools" };
	const tinkersTools = artisanTools[14];
	items.splice(14, 1);

	const n = Math.floor(Math.random() * items.length);
	const randomTool = items[n];

	role.inventory.tools.push(thievesTools, tinkersTools, randomTool);

	return role;
};