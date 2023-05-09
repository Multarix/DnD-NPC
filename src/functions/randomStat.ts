
import { AbilityPriority, Stats } from "../../interfaces.js";



class StatRoller {
	#statRolls: number[];
	constructor(){
		this.#statRolls = this.#doStatRolls();
	}
	
	// Sort stats from highest to lowest
	#organiseStats = (stats: number[]) => stats.sort((a, b) => b - a);
	
	
	// Roll a die
	#rollDice = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
	
	
	// Roll 4d6, drop the lowest (reroll a die if it's 1), and return the total of the remaining 3 dice
	#statRoller(): number {
		const rolls: number[] = [];
		
		while(rolls.length < 4){
			const roll = this.#rollDice(1, 6);
			if(roll !== 1) rolls.push(roll);
		}
		
		rolls.sort((a, b) => b - a);
		rolls.pop();
		let total = rolls.reduce((acc, cur) => acc + cur);
		return total;
	}
	
	
	// Roll 6 stats, and sort them from highest to lowest
	#doStatRolls(): number[] {
		const stats: number[] = [];
		
		while(stats.length < 6){
			stats.push(this.#statRoller());
		}
		
		return this.#organiseStats(stats);
	}
	
	
	getStats(): number[] {
		return this.#statRolls;
	}
}


/**
 * @name shuffle
 * @param {string[]} array
 * @returns {number[]}
 * @description Shuffles an array - https://bost.ocks.org/mike/shuffle/
**/
function _shuffle(array: string[]): string[] {
	var m = array.length, t: string, i: number;

	// While there remain elements to shuffle…
	while (m) {
  		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
  
		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
  
	return array;
}


export default function randomStat(skills: AbilityPriority): Stats {
	const statRolls = new StatRoller().getStats();
	
	const stats: Stats = {
		strength: 0,
		dexterity: 0,
		constitution: 0,
		intelligence: 0,
		wisdom: 0,
		charisma: 0
	}
	
	if(statRolls.length !== 6) throw new Error("Stat rolls are not 6 elements long, something went wrong!");
	
	// Technically I think this next part would be faster if I reversed the array...
	// But the array is literally 6 elements long, the difference is negligible
	
	// Apply the highest stat to the main stat
	let statX: number | undefined;
	statX = statRolls.shift();
	if(typeof statX !== "number") throw new Error("Stat roll is not a number, something went wrong!");
	stats[skills.mainStat] = statX;
	
	// Apply the next highest stat to the second stat, if it exists
	if(skills.secondStat){
		statX = statRolls.shift();
		if(typeof statX !== "number") throw new Error("Stat roll is not a number, something went wrong!");
		stats[skills.secondStat] = statX;
	}
	
	// Saving throw stat is next best
	if(skills.mainStat !== skills.saveThrow && skills.secondStat !== skills.saveThrow){
		statX = statRolls.shift();
		if(typeof statX !== "number") throw new Error("Stat roll is not a number, something went wrong!");
		stats[skills.saveThrow] = statX;
	}
	
	// Apply the remaining stats to the misc stats randomly
	for(const stat of _shuffle(skills.miscStats)){
		statX = statRolls.shift();
		if(typeof statX !== "number") throw new Error("Stat roll is not a number, something went wrong!");
		stats[stat as keyof Stats] = statX;
	}
	
	return stats;
};
