import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
const weaponTags = {
    "names": [],
    "simple": true,
    "martial": false
};
const armorTags = {
    "types": ["light"],
    "metal": true,
    "shield": false
};
const skills = {
    mainStat: "charisma",
    secondStat: false,
    saveThrow: "wisdom",
    miscStats: ["strength", "dexterity", "constitution", "intelligence"]
};
export default (race) => {
    const stats = statGen(skills);
    const strength = race.stats.strength + stats.strength;
    const gear = inventory(race, strength, weaponTags, armorTags);
    const role = {
        name: "Warlock",
        link: "https://www.dndbeyond.com/classes/warlock",
        stats: stats,
        inventory: gear,
        disposition: ["Lawful", "Neutral", "Chaotic"],
        backgrounds: ["Acolyte", "Folk Hero", "Haunted One", "Hermit", "Sage", "Guild Artisan", "Guild Merchant", "Outlander"]
    };
    return role;
};
