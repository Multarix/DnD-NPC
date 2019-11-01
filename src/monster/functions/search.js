const sql = require("better-sqlite3")("./src/data.sqlite3");
const escape = require("./escape.js");
const sqlGet = (statement, arrayOfData) => {
	const prep = sql.prepare(statement);
	return prep.get(arrayOfData);
};

module.exports = (name) => {

	const escaped = escape(name);
	const data = sqlGet("SELECT * FROM monsters WHERE lower(name) LIKE ? ORDER BY name ASC ", escaped);
	const monster = (!data)? undefined : data;

	return monster;
}
