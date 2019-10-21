module.exports = (race) => {
	if(!race){
		const races = require(`../races/races.json`);
		const n = Math.floor(Math.random() * races.length);
		race = races[n];
	}
	const data = require(`../races/${race}.js`);
	return data();
};
