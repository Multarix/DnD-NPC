const format = require("./format.js");
module.exports = (data) => {
	if(!Array.isArray(data)) return format(data);

	const monsterArray = [];
	for(const monster of data){
		console.log(monster);
		monsterArray.push(format(monster));
	}
	return monsterArray;
};
