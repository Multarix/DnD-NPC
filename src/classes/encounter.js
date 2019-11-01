module.exports = class encounter {
	constructor(obj){
		const num = parseInt(obj);
		if(!Number.isInteger(num)) throw "Value supplied is not an integer";
		return;
	}
};
