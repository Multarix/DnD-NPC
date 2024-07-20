import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
import fs from "fs";


import { AbilityPriority, RaceData } from "../../interfaces.js";


import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


// Rather than rely on "import assert", just use fs and JSON.parse()
const musicalText = fs.readFileSync(path.resolve(__dirname, "../objects/musicalInstruments.json"), "utf8");
const music = JSON.parse(musicalText);


const weaponTags = {
	"names": ["Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
	"simple": true,
	"martial": false
};

const armorTags = {
	"types": ["light"],
	"shield": false
};

const skills: AbilityPriority = {
	mainStat: "charisma",
	secondStat: false,
	saveThrow: "dexterity",
	miscStats: ["strength", "constitution", "intelligence", "wisdom"]
};

export default (race: RaceData) => {
	const stats = statGen(skills);
	const strength = race.stats.strength + stats.strength;
	const gear = inventory(race, strength, weaponTags, armorTags);
	const role = {
		name: "Bard",
		link: "https://www.dndbeyond.com/classes/bard",
		stats: stats,
		inventory: gear,
		disposition: ["Lawful", "Neutral", "Chaotic"],
		backgrounds: ["Charlatan", "Entertainer", "Hermit", "Urchin"]
	};

	const musical = [...music]; // Make a copy
	for(let i = 0; i < 3; i++){
		const n = Math.floor(Math.random() * musical.length);
		const instrument = musical[n];
		role.inventory.tools.push(instrument);
		musical.splice(musical.indexOf(instrument), 1);
	}
	return role;
};
