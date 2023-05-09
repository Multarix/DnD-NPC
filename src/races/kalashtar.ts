import { Stats } from "../../interfaces.js";


export default async () => {
	const data = {
		name: "Kalashtar",
		link: "https://www.dndbeyond.com/races/kalashtar",
		disposition: ["Good"],
		speed: 30,
		size: "Medium",
		maxAge: 80,
		minAge: 18,
		stats: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 1,
			charisma: 0
		}
	};
	const type = ["strength", "dexterity", "constitution", "intelligence", "charisma"];
	const n = Math.floor(Math.random() * type.length);
	const stat = type[n];
	
	
	data.stats[stat as keyof Stats] += 1;
	return data;
};
