import weaponList from "../objects/weapons.json" assert { type: "json" };
import armorList from "../objects/armor.json" assert { type: "json" };


interface Weapon {
	name: string
	link: string
	damageType: string
	damage: string
	versatileDamage?: string
	simple: boolean
	ranged: boolean
	allowsShield: boolean
	properties: string[]
}

interface Armor {
	name: string
	link: string
	type: string
	isMetal: boolean
	isStealthy: boolean
	strengthReq: number
}


interface Tool {
	name: string
	link: string
}

interface Gear {
	weapon: Weapon
	armor: Armor
	shield: string | false
	tools: Tool[]
}

interface WeaponTags {
	names: string[]
	simple: boolean
	martial: boolean
}

interface ArmorTags {
	types: string[]
	metal: boolean
	shield: boolean
}

interface Stats {
	strength: number
	dexterity: number
	constitution: number
	intelligence: number
	wisdom: number
	charisma: number
}

interface RaceData {
	name: string
	link: string
	disposition: string[]
	speed: number
	size: string
	maxAge: number
	minAge: number
	stats: Stats
}

export default function inventory(race: RaceData, strength: number, weaponTags: WeaponTags, armorTags: ArmorTags): Gear {
	const gear: Gear = {
		weapon: weaponList[0],
		armor: armorList[0],
		shield: false,
		tools: []
	};
	
	// Filter out the weapons that are too heavy for for small characters
	if(race.size === "Small") weaponList.filter(x => !x.properties.includes("heavy"));
	
	// Get all of the viable weapons
	const viableWeapons: Weapon[] = [];
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
	const viableArmor: Armor[] = [];
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
