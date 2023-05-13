import { RaceData } from "../../interfaces.js";
import fs from "fs";


// Rather than rely on "import assert", just use fs and JSON.parse()
const raceText = fs.readFileSync("./src/races/races.json", "utf8");
const races = JSON.parse(raceText);


export default async function chosenRace(raceType: string): Promise<RaceData>{
	if(raceType === "random"){
		const n = Math.floor(Math.random() * races.length);
		raceType = races[n];
	}
	
	const data = await import(`../races/${raceType}.js`);
	return await data.default();
};