export default async () => {
	const types = ["deep", "forest", "rock"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const gnome = await import(`./gnome#${subrace}.js`);
	return await gnome();
};
