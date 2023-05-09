import { Stats } from "../../interfaces.js";


export default async () => {
	const data = {
		name: "Envoy Warforged",
		link: "https://www.dndbeyond.com/races/warforged#Envoy",
		disposition: ["Good", "Good", "Neutral", "Neutral", "Evil"],
		speed: 30,
		size: "Medium",
		maxAge: 32,
		minAge: 2,
		stats: {
			strength: 0,
			dexterity: 0,
			constitution: 1,
			intelligence: 0,
			wisdom: 0,
			charisma: 0
		}
	};
	const a = ["strength", "dexterity", "intelligence", "wisdom", "charisma"];
	let n = Math.floor(Math.random() * a.length);
	let s = a[n];	// Grab a random stat from the array
	data.stats[s as keyof Stats] += 1;	// Apply +1 to that stat
	a.splice(a.indexOf(s), 1);	// Remove the stat that was increased from the array

	n = Math.floor(Math.random() * a.length);
	s = a[n];	// Grab a random stat from the array
	data.stats[s as keyof Stats] += 1;	// Apply +1 to that stat
	return data;
};
