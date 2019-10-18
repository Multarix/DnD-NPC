module.exports = () => {
	const types = ["hill", "mountain"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const dwarf = require(`./dwarf-${subrace}.js`);
	return dwarf();
};
