import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
import fs from "fs";


import { AbilityPriority, RaceData } from "../../interfaces.js";


import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


// Rather than rely on "import assert", just use fs and JSON.parse()
const musicalText = fs.readFileSync(path.resolve(__dirname, "../objects/musicalInstruments.json"), "utf8");
const musical = JSON.parse(musicalText);

const artisanText = fs.readFileSync(path.resolve(__dirname, "../objects/artisanTools.json"), "utf8");
const artisan = JSON.parse(artisanText);


const weaponTags = {
	"names": ["Shortsword"],
	"simple": true,
	"martial": false
};

const armorTags = {
	"types": [],
	"shield": false
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
		name: "Monk",
		link: "https://www.dndbeyond.com/classes/monk",
		stats: stats,
		inventory: gear,
		disposition: ["Neutral"],
		backgrounds: ["Acoylte", "Haunted One", "Hermit", "Sage"]
	};

	const toolList = (Math.random() > 0.5) ? musical : artisan;
	const n = Math.floor(Math.random() * toolList.length);

	const tool = toolList[n];

	role.inventory.tools.push(tool);
	return role;
};