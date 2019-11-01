const search = require("../monster/functions/searchResults.js");
module.exports = class monster {
	constructor(obj){
		this.all = () => search(0);
		this.random = () => search(1);
		this.search = (value) => search(2, value);
		this.searchAll = (value) => search(3, value);
	}
};
