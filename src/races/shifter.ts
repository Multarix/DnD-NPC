export default async () => {
	const types = ["beasthide", "longtooth", "swiftstride", "wildhunt"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const shifter = await import(`./shifter_${subrace}.js`);
	return await shifter.default();
};
