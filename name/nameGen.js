module.exports = (raceName) => {
	const gender = (Math.random() > 0.5) ? "Male" : "Female";

	const reggie = /\w+$/g;
	const str = raceName.toLowerCase().replace("-", "");
	const race = reggie.exec(str)[0];

	const first = require(`./${gender.toLowerCase()}/${race}.json`);
	const last = require(`./lastNames/${race}.json`);

	const f = Math.floor(Math.random() * first.length);
	const l = Math.floor(Math.random() * last.length);

	const name = `${first[f]} ${last[l]}`.replace(/\s$/, "");

	return { name: name, gender: gender };
};
