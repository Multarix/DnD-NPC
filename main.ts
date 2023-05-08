import _rolePicker from "./src/functions/rolePicker.js";
import _racePicker from "./src/functions/racePicker.js";
import _generateNPC from "./src/functions/generate.js";
import { StarterObject } from "./src/functions/interfaces.js";




/**
 * @class NPC
 * @description A class for generating pseudo NPCs
**/
export default class NPC {
	#roleType: string = "random";
	#raceType: string = "random";
	character: object | undefined = undefined;
	
	
	constructor(starterObject: StarterObject){
		const subRace = starterObject?.subRace || "";
		if(starterObject?.raceType) this.#raceType = _racePicker(starterObject.raceType, subRace);
		if(starterObject?.classType) this.#roleType = _rolePicker(starterObject.classType);
	}

	
	
	/**
	 * @name setRace
	 * @param {string} raceType
	 * @param {string} [subRace]
	 * @returns {NPC}
	 * @description Sets the race of the NPC
	**/
	setRace(raceType: string, subRace: string = ""): NPC {
		if(this.character) return this;
		this.#raceType = _racePicker(raceType, subRace);
		return this;
	}
	/**
	 * @name getRace
	 * @returns {string}
	 * @description Gets the race of the NPC
	**/
	getRace(): string {
		return this.#raceType;
	}

	
	
	/**
	 * @name setRole
	 * @param {string} roleType
	 * @returns {NPC}
	 * @description Sets the role of the NPC
	**/
	setClass(roleType: string): NPC {
		if(this.character) return this;
		this.#roleType = _rolePicker(roleType);
		return this;
	}
	/**
	 * @name getRole
	 * @returns {string}
	 * @description Gets the role of the NPC
	**/
	getClass(): string {
		return this.#roleType;
	}
	
	
	
	/**
	 * @name generate
	 * @description Generates all of the additional the NPC with pseudo-random values
	 * @returns {CharacterObject}
	**/
	async generate(){
		if(this.character) return this;
		return await _generateNPC(this.#raceType, this.#roleType);
	}
};