import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
import music from "../objects/musicalInstruments.json" assert { type: "json" };
const weaponTags = {
    "names": ["Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
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
    saveThrow: "dexterity",
    miscStats: ["strength", "constitution", "intelligence", "wisdom"]
};
export default (race) => {
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
    const musical = [...music];
    const items = [];
    for (let i = 0; i < 3; i++) {
        const n = Math.floor(Math.random() * musical.length);
        const instrument = musical[n];
        role.inventory.tools.push(instrument);
        musical.splice(musical.indexOf(instrument), 1);
    }
    return role;
};
