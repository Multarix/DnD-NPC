module.exports = () => {
	const data = {
		name: "Kalashtar",
		link: "kalashtar",
		speed: 30,
		small: false,
		stats: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 1,
			charisma: 0,
		},
	};
	const type = ["strength", "dexterity", "constitution", "intelligence", "charisma"];
	const n = Math.floor(Math.random() * type.length);
	const stat = type[n];
	data.stats[stat] += 1;
	return data;
};
