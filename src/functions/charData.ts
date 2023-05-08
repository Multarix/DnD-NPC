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

interface CharacterData {
	name: string
	gender: string
	alignment: string
	age: number
	background: string
	level: number
}

export default async function charData(race: RaceData, role: RoleData): Promise<CharacterData> {

	const age = Math.round(Math.random() * (race.maxAge - race.minAge) + race.minAge);
	const gender = (Math.random() > 0.5) ? "Male" : "Female";

	
	let randomNumber = Math.floor(Math.random() * role.backgrounds.length);
	const background = role.backgrounds[randomNumber];

	
	randomNumber = Math.floor(Math.random() * role.disposition.length);
	const lnc = role.disposition[randomNumber];
	randomNumber = Math.floor(Math.random() * race.disposition.length);
	const gne = race.disposition[randomNumber];
	const alignment = (gne === lnc) ? "True Neutral" : `${lnc} ${gne}`;

	
	let raceName = race.name.toLowerCase().replace("-", "");
	const reggie = /\w+$/g;
	const regMatch = reggie.exec(raceName);
	if(regMatch === null) throw new Error("No match found, Something went wrong!");
	raceName = regMatch[0];

	
	let firstName = await import(`../names/${gender.toLowerCase()}/${raceName}.json`, { assert: { type: "json" } });
	let lastName = await import(`../names/lastNames/${raceName}.json`, { assert: { type: "json" } });
	randomNumber = Math.floor(Math.random() * firstName.length);
	firstName = firstName[randomNumber];
	randomNumber = Math.floor(Math.random() * lastName.length);
	lastName = lastName[randomNumber];
	const name = `${firstName} ${lastName}`.replace(/\s$/, "");

	
	return { name: name, gender: gender, alignment: alignment, age: age, background: background, level: 1 };
};
