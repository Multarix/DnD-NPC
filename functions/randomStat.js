module.exports = (obj) => {
	const stats = {
		strength: 8,
		dexterity: 8,
		constitution: 8,
		intelligence: 8,
		wisdom: 8,
		charisma: 8,
	};

	let total = 0;
	for(const [key] of Object.entries(stats)){
		const num = Math.floor(Math.random() * 5);
		stats[key] += num;
		total += num;
	}
	total -= 27;

	while(total < 0 && stats[obj.mainStat] !== 15){
		stats[obj.mainStat] += 1;
		total += 1;
		if(stats[obj.mainStat] >= 14) total += 1;
	}

	if(obj.secondStat){
		while(total < 0 && stats[obj.secondStat] !== 14){
			stats[obj.secondStat] += 1;
			total += 1;
			if(stats[obj.secondStat] >= 14) total += 1;
		}
	}

	while(total < 0 && stats[obj.saveThrow] !== 14){
		stats[obj.saveThrow] += 1;
		total += 1;
		if(stats[obj.saveThrow] >= 14) total += 1;
	}

	while(total < 0){
		const num = Math.floor(Math.random() * obj.miscStats.length);
		if(stats[obj.miscStats[num]] < 13){	stats[obj.miscStats[num]] += 1;	total += 1;	}
	}
	return stats;
};
