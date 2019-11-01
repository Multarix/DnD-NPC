const monster = require("./search.js");
const monsterSpeed = require("./speed.js");
const hp = require("./hp.js");
module.exports = (name) => {

	const data = monster(name);
	if(!data) return undefined;
	const hpData = hp(data.hp);
	const speed = monsterSpeed({ base: data.speed_base, swim: data.speed_swim, fly: data.speed_fly, climb: data.speed_climb, burrow: data.speed_burrow });
	const saves = (data.saves) ? data.saves.split(", ") : [];

	return {
		name: data.name,
		link: `https://www.dndbeyond.com/monsters/${data.name.replace(/ /g, "-")}`,
		size: data.size,
		type:  data.type,
		alignment:  data.alignment,
		armor:  data.armor,
		hp: hpData,
		speed: speed,
		stats: {
			strength: data.str,
			dexterity:  data.dex,
			constitution:  data.con,
			intelligence:  data.int,
			wisdom:  data.wis,
			charisma:  data.char,
		},
		saves: saves,
		challenge: data.challenge,
	}
}
