const rolePicker = require("../functions/rolePicker.js");
const racePicker = require("../functions/racePicker.js");
const generateMonster = require("../functions/generateNPC.js");
module.exports = class monster {
	constructor(obj){
		this.roleType = undefined;
		this.raceType = undefined;
		if(obj){
			if(obj.raceType) this.raceType = racePicker("monster", [obj.raceType, obj.subRace]);
			if(obj.roleType) this.roleType = rolePicker("monster", { roleType: obj.roleType });
		}
	}

	raceType(...obj){
		if(this.character) return;
		this.raceType = racePicker("monster", obj);
		return this;
	}

	roleType(obj){
		if(this.character) return;
		this.roleType = rolePicker("monster", obj);
		return this;
	}

	generate(){
		if(this.character) return;
		return generateMonster(this);
	}
};
