import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
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
const skills = {
    mainStat: "strength",
    secondStat: "charisma",
    saveThrow: "wisdom",
    miscStats: ["dexterity", "constitution", "intelligence"]
};
export default (race) => {
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
