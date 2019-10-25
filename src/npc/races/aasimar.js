module.exports = () => {
	const types = ["fallen", "protector", "scourge"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const aasimar = require(`./aasimar#${subrace}.js`);
	return aasimar();
};
