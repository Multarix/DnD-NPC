export default async () => {
	const types = ["envoy", "juggernaut", "skirmisher"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const warforged = await import(`./warforged_${subrace}.js`);
	return await warforged.default();
};
