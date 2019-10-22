module.exports = () => {
	const types = ["beasthide", "longtooth", "swiftstride", "wildhunt"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const shifter = require(`./shifter#${subrace}.js`);
	return shifter();
};
