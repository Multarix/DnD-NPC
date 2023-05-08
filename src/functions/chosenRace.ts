import races from "../races/races.json" assert { type: "json" };


interface Stats {
	strength: number
	dexterity: number
	constitution: number
	intelligence: number
	wisdom: number
	charisma: number
}

interface RaceData {
	name: string,
	link: string,
	disposition: string[],
	speed: number,
	size: string,
	maxAge: number,
	minAge: number,
	stats: Stats
}


export default async function chosenRace(raceType: string): Promise<RaceData>{
	if(raceType === "random"){
		const n = Math.floor(Math.random() * races.length);
		raceType = races[n];
	}
	
	const data = await import(`../races/${raceType}.js`);
	return await data.default();
};