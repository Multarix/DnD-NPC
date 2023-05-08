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
    mainStat: "intelligence",
    secondStat: false,
    saveThrow: "wisdom",
    miscStats: ["strength", "dexterity", "constitution", "charisma"]
};
export default (race) => {
    const stats = statGen(skills);
    const strength = race.stats.strength + stats.strength;
    const gear = inventory(race, strength, weaponTags, armorTags);
    const role = {
        name: "Wizard",
        link: "https://www.dndbeyond.com/classes/wizard",
        stats: stats,
        inventory: gear,
        disposition: ["Lawful", "Neutral", "Chaotic"],
        backgrounds: ["Acolyte", "Folk Hero", "Haunted One", "Hermit", "Sage", "Guild Artisan", "Guild Merchant", "Outlander"]
    };
    return role;
};
