module.exports = () => {
	const types = ["envoy", "juggernaut", "skirmisher"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const warforged = require(`./warforged#${subrace}.js`);
	return warforged();
};
