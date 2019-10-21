const weaponList = require("./weapons.json");
const armorList = require("./armor.json");
module.exports = (race, strength, wTags, aTags) => {
	const gear = {
		weapon: undefined,
		shield: undefined,
		armor: undefined,
		tools: [],
	};
	if(race.size === "Small") weaponList.filter(x => !x.properties.includes("heavy"));

	const weaponLength = weaponList.length;
	const viableWeapons = [];
	for(let i = 0; i < weaponLength; i++){
		if(wTags.names.includes(weaponList[i].name)){ viableWeapons.push(weaponList[i]); continue; }
		if(wTags.simple && weaponList[i].simple){ viableWeapons.push(weaponList[i]); continue; }
		if(wTags.martial && !weaponList[i].simple){ viableWeapons.push(weaponList[i]); continue; }
	}
	let n = Math.floor(Math.random() * viableWeapons.length);
	const weapon = viableWeapons[n];
	const shieldLink = "https://www.dndbeyond.com/equipment/shield";
	gear.weapon = weapon;
	gear.shield = (aTags.shield && weapon.allowShield && Math.random() >= 0.5) ? "https://www.dndbeyond.com/equipment/shield" : false;

	const viableArmor = [];
	const armorLength = armorList.length;
	for(let i = 0; i < armorLength; i++){
		if(aTags.types.length === 0 || !aTags.types.length) break;
		if(!armorList[i].metal && !aTags.metal){ viableArmor.push(armorList[i]); continue; }
		if(aTags.types.includes(armorList[i].type) && armorList[i].strength < strength){ viableArmor.push(armorList[i]); continue; }
	}

	n = Math.floor(Math.random() * viableArmor.length);
	const armor = viableArmor[n];
	gear.armor = armor;
	return gear;
};
