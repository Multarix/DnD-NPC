import weaponList from "../objects/weapons.json" assert { type: "json" };
import armorList from "../objects/armor.json" assert { type: "json" };
import { RaceData, WeaponTags, ArmorTags, Inventory, WeaponData, ArmorData } from "../../interfaces.js";

export default function inventory(race: RaceData, strength: number, weaponTags: WeaponTags, armorTags: ArmorTags): Inventory {
	const gear: Inventory = {
		weapon: weaponList[0],
		armor: armorList[0],
		shield: false,
		tools: []
	};
	
	// Filter out the weapons that are too heavy for for small characters
	if(race.size === "Small") weaponList.filter(x => !x.properties.includes("heavy"));
	
	// Get all of the viable weapons
	const viableWeapons: WeaponData[] = [];
	for(const weapon of weaponList){
		if(weaponTags.names.includes(weapon.name)){
			viableWeapons.push(weapon);
			continue;
		}
		
		if(weaponTags.simple && weapon.simple){
			viableWeapons.push(weapon);
			continue;
		}
		
		if(weaponTags.martial && !weapon.simple){
			viableWeapons.push(weapon);
			continue;
		}
	}
	
	// Select a random weapon from the viable weapons, and if it allows a shield, roll for a shield (50% chance)
	let n = Math.floor(Math.random() * viableWeapons.length);
	const weapon = viableWeapons[n];

	gear.weapon = weapon;
	gear.shield = (armorTags.shield && weapon.allowsShield && Math.random() >= 0.5) ? "https://www.dndbeyond.com/equipment/shield" : false;
	
	// Get all of the viable armor
	const viableArmor: ArmorData[] = [];
	for(const armor of armorList){
		if(armorTags.types.length === 0) break;
		if(!armor.isMetal && !armorTags.metal){
			viableArmor.push(armor);
			continue;
		}
		
		if(armorTags.types.includes(armor.type) && armor.strengthReq < strength){
			viableArmor.push(armor);
			continue;
		}
	}
	
	// Select a random armor from the viable armors
	n = Math.floor(Math.random() * viableArmor.length);
	const armor = viableArmor[n];
	
	gear.armor = armor;
	
	return gear;
};
