module.exports = (rollTimes, maxRoll, adjuster) => {

	let minHP = 0;
	for(let i = 0; i < rollTimes; i++){
		minHP += 1;
	}
	minHP += adjuster;

	let maxHP = 0;
	for(let i = 0; i < rollTimes; i++){
		maxHP += maxRoll;
	}
	maxHP += adjuster;

	const minMax = minHP + maxHP;
	const average = Math.round(minMax / 2);
	return average;
};
