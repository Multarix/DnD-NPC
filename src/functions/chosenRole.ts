import roles from "../roles/roles.json" assert { type: "json" };


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

interface RoleData {
	name: string
	link: string
	stats: Stats
	inventory: {}
	disposition: string[]
	backgrounds: string[]
}


export default async function chosenRole(roleType: string, race: RaceData): Promise<RoleData>{
	if(roleType === "random"){
		const n = Math.floor(Math.random() * roles.length);
		roleType = roles[n];
	}
	
	const data = await import(`../roles/${roleType}.js`);
	return data.default(race);
};