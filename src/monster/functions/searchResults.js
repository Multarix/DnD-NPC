const format = require("./dataType.js");
const sql = require("better-sqlite3")("./src/monster/objects/monsters.sqlite3");
const sqlGet = (statement, ...arguments) => {
	const prep = sql.prepare(statement);
	return prep.get(arguments);
};
const sqlAll = (statement, ...arguments) => {
	const prep = sql.prepare(statement);
	return prep.all(arguments);
};
module.exports = (n, name) => {

	name = String(name);
	let monsterData;
	let result;
	switch(n){
		case 0:
			// Grab all monsters
			monsterData = sqlAll("SELECT * FROM monsters WHERE name LIKE ?", "%");
			break;
		case 1:
			// Get a random monster
			const all = sqlAll("SELECT * FROM monsters WHERE name LIKE ?", "%");
			monsterData = all[Math.floor(Math.random() * all.length)];
			break;
		case 2:
			// Search for a single monster
			monsterData = sqlGet("SELECT * FROM monsters WHERE lower(name) LIKE ?", `%${name.toLowerCase().replace(/%/g, "\\%")}%`);
			break;
		case 3:
			// Search for a list of monsters
			monsterData = sqlAll("SELECT * FROM monsters WHERE lower(name) LIKE ?", `%${name.toLowerCase().replace(/%/g, "\\%")}%`);
			break;
		default:
			const e = new RangeError();
			e.message = "Something appears to have gone wrong! You should report this error."
			throw e;
	}
	return format(monsterData);
}
