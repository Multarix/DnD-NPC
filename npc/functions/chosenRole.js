module.exports = (role, race) => {
	if(!role){
		const roles = require("../roles/roles.json");
		const n = Math.floor(Math.random() * roles.length);
		role = roles[n];
	}
	const data = require(`../roles/${role}.js`);
	return data(race);
};
