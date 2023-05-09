export default async () => {
	const types = ["stout", "lightfoot"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const halfling = await import(`./halfling_${subrace}.js`);
	return await halfling.default();
};
