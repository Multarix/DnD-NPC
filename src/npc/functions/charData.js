module.exports = (race, role) => {

	const age = Math.round(Math.random() * (race.maxAge - race.minAge) + race.minAge);
	const gender = (Math.random() > 0.5) ? "Male" : "Female";

	let n = Math.floor(Math.random() * role.backgrounds.length);
	const background = role.backgrounds[n];

	n = Math.floor(Math.random() * role.disposition.length);
	const lnc = role.disposition[n];
	n = Math.floor(Math.random() * race.disposition.length);
	const gne = race.disposition[n];
	const alignment = (gne === lnc) ? "True Neutral" : `${lnc} ${gne}`;

	const raceName = race.name.toLowerCase().replace("-", "");
	const reggie = /\w+$/g;
	const r = reggie.exec(raceName)[0];

	let f = require(`../names/${gender.toLowerCase()}/${r}.json`);
	let l = require(`../names/lastNames/${r}.json`);
	n = Math.floor(Math.random() * f.length);
	f = f[n];
	n = Math.floor(Math.random() * l.length);
	l = l[n];
	const name = `${f} ${l}`.replace(/\s$/, "");

	return { name: name, gender: gender, alignment: alignment, age: age, background: background, level: 1 };
};
