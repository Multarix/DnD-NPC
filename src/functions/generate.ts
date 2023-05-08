import raceGen from "./chosenRace.js";
import roleGen from "./chosenRole.js";
import charGen from "./charData.js";

import { Stat, Character } from "./interfaces.js";

// Generate the prof bonus for each stat
function generateProficiency(roleStat: number, raceStat: number): Stat {

	const total = roleStat + raceStat;
	const prof = Math.floor((total - 10) / 2);
	const totalProf = { total, prof };
	
	return totalProf
}


export default async function generateNPC(raceType: string, roleType: string): Promise<Character> {
	const race = await raceGen(raceType);
	const role = await roleGen(roleType, race);
	const character = await charGen(race, role);

	return {
		character: character,
		race: {
			name: race.name,
			link: race.link,
			size: race.size,
			speed: race.speed
		},
		class: {
			name: role.name,
			link: role.link,
			stats: {
				strength: generateProficiency(role.stats.strength, race.stats.strength),
				dexterity: generateProficiency(role.stats.dexterity, race.stats.dexterity),
				constitution: generateProficiency(role.stats.constitution, race.stats.constitution),
				intelligence: generateProficiency(role.stats.intelligence, race.stats.intelligence),
				wisdom: generateProficiency(role.stats.wisdom, race.stats.wisdom),
				charisma: generateProficiency(role.stats.charisma, race.stats.charisma)
			}
		},
		inventory: role.inventory
	};
};
