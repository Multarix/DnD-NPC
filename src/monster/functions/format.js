module.exports = (data) => {
	const saveRolls = (!data.saves) ? [] : data.saves.split(", ");
	return {
		name: data.name,
		link: data.link.toLowerCase(),
		size: data.size,
		type: data.type,
		alignment: data.alignment,
		armor: data.armor,
		hp: {
			average: data.hpAverage,
			formula: data.hpFormula
		},
		speed: {
			base: data.s_base,
			swim: data.s_swim,
			fly: data.s_fly,
			climb: data.s_climb,
			burrow: data.s_burrow
		},
		stats: {
			strength: data.strength,
			dexterity: data.dexterity,
			constitution: data.constitution,
			intelligence: data.intelligence,
			wisdom: data.wisdom,
			charisma: data.charisma
		},
		saves: saveRolls,
		challenge: data.challenge
	};
};
