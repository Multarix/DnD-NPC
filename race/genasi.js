module.exports = () => {
	const types = ["air", "earth", "fire", "water"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const genasi = require(`./genasi-${subrace}.js`);
	return genasi();
};
