import races from "../races/races.json" assert { type: "json" };
import { RaceData } from "./interfaces.js";


export default async function chosenRace(raceType: string): Promise<RaceData>{
	if(raceType === "random"){
		const n = Math.floor(Math.random() * races.length);
		raceType = races[n];
	}
	
	const data = await import(`../races/${raceType}.js`);
	return await data.default();
};