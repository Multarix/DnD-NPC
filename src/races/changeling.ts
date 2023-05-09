export default async () => {
	const data = {
		name: "Changeling",
		link: "https://www.dndbeyond.com/races/changeling",
		disposition: ["Neutral"],
		speed: 30,
		size: "Medium",
		maxAge: 80,
		minAge: 12,
		stats: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 2
		}
	};
	const stat = (Math.random() > 0.5) ? "intelligence" : "dexterity";
	data.stats[stat] += 1;
	return data;
};
