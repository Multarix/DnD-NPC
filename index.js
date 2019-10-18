const nameGen = require("./name/nameGen.js");
const rolePicker = require("./functions/rolePicker.js");
const racePicker = require("./functions/racePicker.js");
const generateNPC = require("./functions/generateNPC.js");
module.exports = class npc {
	constructor(obj){
		this.role = undefined;
		this.race = undefined;
		if(obj){
			if(obj.raceType) this.race = racePicker([obj.raceType, obj.subRace]);
			if(obj.role) this.role = rolePicker({ role: obj.role });
		}
	}

	roleType(obj){
		this.role = rolePicker(obj);
		return this;
	}

	raceType(...obj){
		this.race = racePicker(obj);
		return this;
	}

	generate(){
		return generateNPC(this);
	}
};
