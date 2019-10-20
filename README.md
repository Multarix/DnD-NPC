## About
DnD-NPC is a [Node.js](https://nodejs.org) module allows you to easily create randomized D&D NPCs.<br/>

---
## Usage
You can create a new npc in several ways.</br>
```js
const dnd = require('dnd-npc');
const npc = new dnd.npc({ raceType: "warforged", subRace: "juggernaut", roleType: "fighter"})
	.generate(); // Generates a Warforged-Juggernaut Fighter
```
```js
const dnd = require('dnd-npc');
const npc = new dnd.npc()
	.raceType({ raceType: "warforged", subRace: "juggernaut"})
	.roleType("fighter")
	.generate(); // Generates a Warforged-Juggernaut Fighter
```
You can also overwrite settings that you have already input.
```js
const dnd = require('dnd-npc');
const npc = new dnd.npc({ raceType: "warforged", subRace: "juggernaut", roleType: "fighter"})
	.raceType({ raceType: "human" })
	.roleType("bard")
	.generate(); // Generates a Human Bard (why u make Bard tho?)
```
Leaving the raceType or role blank, or passing an invalid type to it, will result in that thing being randomly generated.
```js
const dnd = require('dnd-npc');
const npc = new dnd.npc({ raceType: "warforged" })
	.generate(); // Generates a Warforged with a random sub-race and role.
```
You can also pass a sub-race as the raceType and it will generate with the correct race and sub-race.
```js
const dnd = require('dnd-npc');
const npc = new dnd.npc({ raceType: "juggernaut" })
	.generate(); // Generates a Warforged-Juggernaut with a random role.
```
---
## Output
After using the #generate() method, you'll receive an object like this with all the details of the NPC.
Without using #generate() all you'll have is an object with a raceType and roleType property.

```js
{
	"character": {
		"name": String, // The name of the NPC
		"gender": String, // The gender of the NPC
		"alignment": String // The alignment of the NPC
	},
	"race": {
		"name": String, // The name of the race
		"link": String, // Link to the race on D&D Beyond
		"small": Boolean, // Whether or not the race is classified as small
		"speed": Number // The base movement speed of the race
	},
	"class": {
		"name": String, // The name of the class
		"link": String, // link to the class on D&D Beyond
		"stats": {
			"strength": Number, // The total strength of the NPC
			"dexterity": Number, // The total dexterity of the NPC
			"constitution": Number, // The total constitution of the NPC
			"intelligence": Number, // The total intelligence of the NPC
			"wisdom": Number, // The total wisdom of the NPC
			"charisma": Number // The total charisma of the NPC
		},
	},
	"inventory": {
		"weapon": { // The weapon that the NPC is carrying.
			"name": String, // The name of the weapon
			"link": String, // The link to the weapon on D&D Beyond
			"damageType": String, // What type of damage the weapon does. Bludgeoning, Piercing, Slashing etc.
			"damageAmount": String, // The damage done by the weapon.
			"vDamage": String, // The damage done if it's versatile weapon being used two-handed
			"simple": Boolean, // Whether this weapon is classified as martial or simple
			"ranged": Boolean, // Whether or not the weapon is a ranged weapon
			"allowShield": Boolean, // Whether or not the weapon allows the use of a shield
			"properties": Array // The properties of the weapon, such as versatile, heavy etc. May be Empty.
		},
		"shield": Boolean, // Whether or not the NPC has a shield, if it does, this will instead be String with a link to shields on D&D Beyond
		"armor": { // The armor that the NPC is wearing, this may be undefined.
			"name": String, // The name of the armor
			"type": String, // The armor class
			"link": String, // Link to the armor on D&D Beyond
			"strength": Number, // The strength requirement for the armor
			"metal": Boolean, // Whether or not the armor is made of metal
			"stealth": Boolean // Whether or not the armor impedes the stealth of the NPC
		},
		"tools": [ // The tools that the NPC has. May be empty.
			{
				"name": String, // Name of the tool
				"link": String // Link to the tool on D&D Beyond
			}
		]
	}
};
```
## Valid raceType and subRace
- Aarakocra
- Aasimar
- Changeling
- Dragonborn
- Dwarf
	- Hill
	- Mountain
- Elf
	- Eladrin
	- High
	- Wood
- Genasi
	- Air
	- Earth
	- Fire
	- Water
- Gnome
- Goliath
- Halfelf
- Halfling
	- Lightfoot
	- Stout
- Human
- Kalashtar
- Shifter
	- Beasthide
	- Longtooth
	- Swiftstride
	- Wildhunt
- Tiefling
- Warforged
	- Envoy
	- Juggernaut
	- Skirmisher
---
## Valid roleType
- Barbarian
- Bard
- Cleric
- Druid
- Fighter
- Monk
- Paladin
- Ranger
- Rogue
- Sorcerer
- Warlock
- Wizard
