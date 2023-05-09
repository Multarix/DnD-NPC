import { RaceData, RoleData, CharacterData } from "../../interfaces.js";

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

	
	let raceName = race.name.toLowerCase();
	const reggie = /\w+$/g;
	const regMatch = reggie.exec(raceName);
	if(regMatch === null) throw new Error("No match found, Something went wrong!");
	raceName = regMatch[0];

	
	const jsonFirst = await import(`../names/${gender.toLowerCase()}/${raceName}.json`, { assert: { type: "json" } });
	const jsonLast = await import(`../names/lastNames/${raceName}.json`, { assert: { type: "json" } });
	
	const firstNameJSON = jsonFirst.default;
	const lastNameJSON = jsonLast.default;
	
	randomNumber = Math.floor(Math.random() * firstNameJSON.length);
	const firstName = firstNameJSON[randomNumber];
	randomNumber = Math.floor(Math.random() * lastNameJSON.length);
	const lastName = lastNameJSON[randomNumber];
	const name = `${firstName} ${lastName}`.replace(/\s$/, "");

	
	return { name: name, gender: gender, alignment: alignment, age: age, background: background, level: 1 };
};
