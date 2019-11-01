const searchMonster = require("../monster/functions/structure.js");
module.exports = class monster {
	constructor(obj){
		const name = String(obj);
		return searchMonster(name);
	}
};
