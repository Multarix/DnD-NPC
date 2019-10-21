module.exports = () => {
	const types = ["deep", "forest", "rock"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const gnome = require(`./gnome-${subrace}.js`);
	return gnome();
};
