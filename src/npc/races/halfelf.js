module.exports = () => {
	const data = {
		name: "Half-Elf",
		link: "https://www.dndbeyond.com/races/half-elf",
		disposition: ["Good", "Neutral", "Evil"],
		speed: 30,
		size: "Medium",
		maxAge: 150,
		minAge: 20,
		stats: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 2,
		},
	};
	const a = ["strength", "dexterity", "intelligence", "wisdom", "constitution"];
	let n = Math.floor(Math.random() * a.length);
	let s = a[n];	// Grab a random stat from the array
	data.stats[s] += 1;	// Apply +1 to that stat
	a.splice(a.indexOf(s), 1);	// Remove the stat that was increased from the array

	n = Math.floor(Math.random() * a.length);
	s = a[n];	// Grab a random stat from the array
	data.stats[s] += 1;	// Apply +1 to that stat
	return data;
};
