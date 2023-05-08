import inventory from "../functions/inventory.js";
import statGen from "../functions/randomStat.js";
const weaponTags = {
    "names": ["Hand Crossbow", "Longsword", "Mace", "Rapier", "Shortsword"],
    "simple": true,
    "martial": false
};
const armorTags = {
    "types": ["light"],
    "metal": true,
    "shield": false
};
const skills = {
    mainStat: "dexterity",
    secondStat: false,
    saveThrow: "intelligence",
    miscStats: ["strength", "constitution", "wisdom", "charisma"]
};
export default (race) => {
    const stats = statGen(skills);
    const strength = race.stats.strength + stats.strength;
    const gear = inventory(race, strength, weaponTags, armorTags);
    const role = {
        name: "Rogue",
        link: "https://www.dndbeyond.com/classes/rogue",
        stats: stats,
        inventory: gear,
        disposition: ["Neutral", "Chaotic"],
        backgrounds: ["Criminal", "Spy", "Urchin", "Pirate"]
    };
    const tools = { name: "Thieves Tools", link: "https://www.dndbeyond.com/equipment/thieves-tools" };
    role.inventory.tools.push(tools);
    return role;
};
