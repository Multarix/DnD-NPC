const averageHP = require("./hp/average.js");
const actual = require("./hp/actual.js");
module.exports = (hpFormula) => {

	const hpArray = hpFormula.split(/[+×-]/g);
	const rollTimes = parseInt(hpArray[0]);

	let maxRoll;
	switch(hpArray[1]){
		case "d4":
			maxRoll = 4;
			break;
		case "d6":
			maxRoll = 6;
			break;
		case "d8":
			maxRoll = 8;
			break;
		case "d10":
			maxRoll = 10;
			break;
		case "d12":
			maxRoll = 12;
			break;
		case "d20":
			maxRoll = 20;
			break;
		default:
			maxRoll = null;
	};
	if(!maxRoll) throw "Could not calculate the average. Invalid argument supplied.";
	const adjuster = (!hpArray[2]) ? 0 : parseInt(hpArray[2]);

	const average = averageHP(rollTimes, maxRoll, adjuster);
	const hpAmount = actual(rollTimes, maxRoll, adjuster);

	return {
		hpAmount: hpAmount,
		average:  average,
		formula:  hpFormula,
	}
}
