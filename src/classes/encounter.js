// const genEncounter = require("../encounter/functions/generate.js");
module.exports = class encounter {
	constructor(obj){
		const num = parseInt(obj);
		if(!Number.isInteger(num)){
			const e = new Error();
			e.name = "TypeError";
			e.message = "Value supplied is not an integer";
			throw e;
		}
		this.level = num;
	//	this.generate = () => genEncounter(this.level);
	}
};
