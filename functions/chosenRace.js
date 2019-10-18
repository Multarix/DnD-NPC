module.exports = (race) => {
	if(!race){
		const races = require("./races.json");
		const n = Math.floor(Math.random() * races.length);
		race = races[n];
	}
	const data = require(`../race/${race}.js`);
	return data();
};
