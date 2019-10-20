module.exports = () => {
	const types = ["stout", "lightfoot"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const halfling = require(`./halfling-${subrace}.js`);
	return halfling();
};
