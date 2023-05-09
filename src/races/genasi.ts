export default async () => {
	const types = ["air", "earth", "fire", "water"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const genasi = await import(`./genasi_${subrace}.js`);
	return await genasi.default();
};
