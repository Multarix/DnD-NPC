const nameGen = require("./name/nameGen.js");
const rolePicker = require("./functions/rolePicker.js");
const racePicker = require("./functions/racePicker.js");
const generateNPC = require("./functions/generateNPC.js");
module.exports = class npc {
	constructor(obj){
		this.roleType = undefined;
		this.raceType = undefined;
		if(obj){
			if(obj.raceType) this.raceType = racePicker([obj.raceType, obj.subRace]);
			if(obj.roleType) this.roleType = rolePicker({ roleType: obj.roleType });
		}
	}

	raceType(...obj){
		if(this.character) return;
		this.raceType = racePicker(obj);
		return this;
	}

	roleType(obj){
		if(this.character) return;
		this.roleType = rolePicker(obj);
		return this;
	}

	generate(){
		if(this.character) return;
		return generateNPC(this);
	}
};
