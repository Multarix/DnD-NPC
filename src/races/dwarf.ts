export default async () => {
	const types = ["hill", "mountain"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const dwarf = await import(`./dwarf_${subrace}.js`);
	return await dwarf.default();
};
