import rolePicker from "./src/functions/rolePicker.js";
import racePicker from "./src/functions/racePicker.js";
import generateNPC from "./src/functions/generate.js";
/**
 * @class NPC
 * @description A class for generating pseudo NPCs
**/
export default class NPC {
    #roleType = "random";
    #raceType = "random";
    character = {};
    constructor(starterObject) {
        const subRace = starterObject?.subRace || "";
        if (starterObject?.raceType)
            this.#raceType = racePicker(starterObject.raceType, subRace);
        if (starterObject?.roleType)
            this.#roleType = rolePicker(starterObject.roleType);
    }
    /**
     * @name setRace
     * @param  {string} raceType
     * @param  {string} [subRace]
     * @returns {NPC}
     * @description Sets the race of the NPC
    **/
    setRace(raceType, subRace = "") {
        if (this.character)
            return this;
        this.#raceType = racePicker(raceType, subRace);
        return this;
    }
    /**
     * @name getRace
     * @returns {string}
     * @description Gets the race of the NPC
    **/
    getRace() {
        return this.#raceType;
    }
    /**
     * @name setRole
     * @param  {string} roleType
     * @returns {NPC}
     * @description Sets the role of the NPC
    **/
    setRole(roleType) {
        if (this.character)
            return this;
        this.#roleType = rolePicker(roleType);
        return this;
    }
    /**
     * @name getRole
     * @returns {string}
     * @description Gets the role of the NPC
    **/
    getRole() {
        return this.#roleType;
    }
    /**
     * @name generate
     * @description Generates all of the additional the NPC with pseudo-random values
     * @returns {CharacterObject}
    **/
    async generate() {
        if (this.character)
            return this;
        return await generateNPC(this.#raceType, this.#roleType);
    }
}
;
