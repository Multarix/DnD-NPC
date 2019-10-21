module.exports = (race, role) => {
	const raceName = race.name;

	const age = Math.round(Math.random() * (race.maxAge - race.minAge) + race.minAge);
	const gender = (Math.random() > 0.5) ? "Male" : "Female";

	let n = Math.floor(Math.random() * role.disposition.length);
	const lnc = role.disposition[n];
	n = Math.floor(Math.random() * race.disposition.length);
	const gne = race.disposition[n];
	const alignment = (gne === lnc) ? "True Neutral" : `${lnc} ${gne}`;

	const reggie = /\w+$/g;
	const str = raceName.toLowerCase();
	const r = reggie.exec(str)[0];

	const first = require(`../names/${gender.toLowerCase()}/${r}.json`);
	const last = require(`../names/lastNames/${r}.json`);

	const f = Math.floor(Math.random() * first.length);
	const l = Math.floor(Math.random() * last.length);

	const name = `${first[f]} ${last[l]}`.replace(/\s$/, "");

	return { name: name, gender: gender, alignment: alignment, age: age, level: 1 };
};
