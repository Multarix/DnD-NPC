import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
const weaponTags = {
    "names": [],
    "simple": true,
    "martial": true
};
const armorTags = {
    "types": ["light", "medium"],
    "metal": true,
    "shield": true
};
const skills = {
    mainStat: "strength",
    secondStat: false,
    saveThrow: "constitution",
    miscStats: ["dexterity", "intelligence", "wisdom", "wisdom"]
};
export default (race) => {
    const stats = statGen(skills);
    const strength = race.stats.strength + stats.strength;
    const gear = inventory(race, strength, weaponTags, armorTags);
    const role = {
        name: "Barbarian",
        link: "https://www.dndbeyond.com/classes/barbarian",
        stats: stats,
        inventory: gear,
        disposition: ["Lawful", "Neutral", "Chaotic"],
        backgrounds: ["Gladiator", "Folk Hero", "Haunted One", "Outlander", "Pirate", "Soldier"]
    };
    return role;
};
