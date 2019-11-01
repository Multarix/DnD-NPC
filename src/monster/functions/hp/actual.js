const die = require("./die.js");
module.exports = (rollTimes, maxRoll, adjuster) => {

	let hp = 0;
	for(let i = 0; i < rollTimes; i++){	hp += die(maxRoll);	}
	hp += adjuster;
	return hp;
}
