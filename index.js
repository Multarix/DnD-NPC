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
			if(obj.roleType) this.roleType = rolePicker({ roleType: obj.roleType });
		}
	}

	raceType(...obj){
		if(this.character) return;
		this.race = racePicker(obj);
		return this;
	}

	roleType(obj){
		if(this.character) return;
		this.role = rolePicker(obj);
		return this;
	}

	generate(){
		if(this.character) return;
		return generateNPC(this);
	}
};
