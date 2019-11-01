module.exports = class monster {
	constructor(obj) {
		this.list = require("../monster/objects/monsters.json");
		this.random = () => this.list[Math.floor(Math.random() * this.list.length)];
	}
};
