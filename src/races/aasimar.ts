export default async () => {
	const types = ["fallen", "protector", "scourge"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const aasimar = await import(`./aasimar#${subrace}.js`);
	return await aasimar();
};
