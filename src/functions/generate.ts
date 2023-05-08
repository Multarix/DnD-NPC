import raceGen from "./chosenRace.js";
import roleGen from "./chosenRole.js";
import charGen from "./charData.js";


interface Stat {
	total: number
	prof: number
}

interface StatDistribution {
	strength: Stat
	dexterity: Stat
	constitution: Stat
	intelligence: Stat
	wisdom: Stat
	charisma: Stat
}

interface Race {
	name: string
	link: string
	speed: number
	size: string
}

interface Role {
	name: string
	link: string
	stats: StatDistribution
}

interface Character {
	character: any
	race: Race
	role: Role
	inventory: any
}


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
		role: {
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
