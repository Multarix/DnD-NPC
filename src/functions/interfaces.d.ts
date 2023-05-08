export interface StarterObject {
	classType?: string,
	raceType?: string,
	subRace?: string
}



export interface RaceData {
	name: string
	link: string
	disposition: string[]
	speed: number
	size: string
	maxAge: number
	minAge: number
	stats: Stats
}

export interface RoleData {
	name: string
	link: string
	stats: Stats
	inventory: Inventory
	disposition: string[]
	backgrounds: string[]
}



export interface WeaponTags {
	names: string[]
	simple: boolean
	martial: boolean
}

export interface ArmorTags {
	types: string[]
	metal: boolean
	shield: boolean
}



export interface Stat {
	total: number
	prof: number
}

export interface Stats {
	strength: number
	dexterity: number
	constitution: number
	intelligence: number
	wisdom: number
	charisma: number
}

export interface StatDistribution {
	strength: Stat
	dexterity: Stat
	constitution: Stat
	intelligence: Stat
	wisdom: Stat
	charisma: Stat
}

export type statType = "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma";
export interface AbilityPriority {
	mainStat: statType
	secondStat: statType | false
	saveThrow: statType
	miscStats: statType[]
}





export interface WeaponData {
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

export interface ArmorData {
	name: string
	link: string
	type: string
	isMetal: boolean
	isStealthy: boolean
	strengthReq: number
}

export interface ToolData {
	name: string
	link: string
}



export interface CharacterData {
	name: string
	gender: string
	alignment: string
	age: number
	background: string
	level: number
}

export interface Race {
	name: string
	link: string
	speed: number
	size: string
}

export interface Role {
	name: string
	link: string
	stats: StatDistribution
}

export interface Inventory {
	weapon: WeaponData
	armor: ArmorData
	shield: string | false
	tools: ToolData[]
}

export interface Character {
	character: CharacterData
	race: Race
	class: Role
	inventory: Inventory
}