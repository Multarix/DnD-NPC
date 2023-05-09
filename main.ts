import _rolePicker from "./src/functions/rolePicker.js";
import _racePicker from "./src/functions/racePicker.js";
import _generateNPC from "./src/functions/generate.js";
import { StarterObject, Character } from "./interfaces.js";




/**
 * @class NPC
 * @description A class for generating pseudo NPCs
**/
export default class NPC {
	#roleType: string = "random";
	#raceType: string = "random";
	character: Character | undefined = undefined;
	
	
	constructor(starterObject: StarterObject){
		const subRace = starterObject?.subRace || "";
		if(starterObject?.raceType) this.#raceType = _racePicker(starterObject.raceType, subRace);
		if(starterObject?.classType) this.#roleType = _rolePicker(starterObject.classType);
	}

	
	
	/**
	 * @param {string} raceType
	 * @param {string} [subRace]
	 * @returns {NPC}
	**/
	setRace(raceType: string, subRace: string = ""): NPC {
		if(this.character) return this;
		this.#raceType = _racePicker(raceType, subRace);
		return this;
	}
	/**
	 * @returns {string}
	**/
	getRace(): string {
		return this.#raceType;
	}

	
	
	/**
	 * @param {string} roleType
	 * @returns {NPC}
	**/
	setClass(roleType: string): NPC {
		if(this.character) return this;
		this.#roleType = _rolePicker(roleType);
		return this;
	}
	/**
	 * @returns {string}
	**/
	getClass(): string {
		return this.#roleType;
	}
	
	
	
	/**
	 * @returns {Character}
	**/
	async generate(): Promise<Character> {
		if(this.character) return this.character;
		this.character = await _generateNPC(this.#raceType, this.#roleType);
		return this.character;
	}
};