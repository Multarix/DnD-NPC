export default async () => {
	const types = ["dark", "eladrin", "high", "wood"];
	const n = Math.floor(Math.random() * types.length);
	const subrace = types[n];

	const elf = await import(`./elf_${subrace}.js`);
	return await elf.default();
};
