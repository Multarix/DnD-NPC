module.exports = () => {
	const types = ["dark", "eladrin", "high", "wood"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const elf = require(`./elf#${subrace}.js`);
	return elf();
};
