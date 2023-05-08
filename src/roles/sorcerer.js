import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
const weaponTags = {
    "names": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
    "simple": false,
    "martial": false
};
const armorTags = {
    "types": [],
    "metal": true,
    "shield": false
};
const skills = {
    mainStat: "charisma",
    secondStat: false,
    saveThrow: "constitution",
    miscStats: ["strength", "dexterity", "intelligence", "wisdom"]
};
export default (race) => {
    const stats = statGen(skills);
    const strength = race.stats.strength + stats.strength;
    const gear = inventory(race, strength, weaponTags, armorTags);
    const role = {
        name: "Sorcerer",
        link: "https://www.dndbeyond.com/classes/sorcerer",
        stats: stats,
        inventory: gear,
        disposition: ["Lawful", "Neutral", "Chaotic"],
        backgrounds: ["Acolyte", "Folk Hero", "Haunted One", "Hermit", "Sage", "Guild Artisan", "Guild Merchant", "Outlander", "Entertainer"]
    };
    return role;
};
