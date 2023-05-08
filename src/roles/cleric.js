import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
const weaponTags = {
    "names": [],
    "simple": true,
    "martial": false
};
const armorTags = {
    "types": ["light", "medium"],
    "metal": true,
    "shield": true
};
const skills = {
    mainStat: "wisdom",
    secondStat: false,
    saveThrow: "charisma",
    miscStats: ["strength", "dexterity", "constitution", "intelligence"]
};
export default (race) => {
    const stats = statGen(skills);
    const strength = race.stats.strength + stats.strength;
    const gear = inventory(race, strength, weaponTags, armorTags);
    const role = {
        name: "Cleric",
        link: "https://www.dndbeyond.com/classes/cleric",
        stats: stats,
        inventory: gear,
        disposition: ["Lawful", "Chaotic"],
        backgrounds: ["Acolyte", "Hermit", "Sage", "Urchin"]
    };
    return role;
};
