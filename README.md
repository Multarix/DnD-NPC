## About
DnD-NPC is a [Node.js](https://nodejs.org) module allows you to easily create randomized D&D NPCs.<br/>

---
## Usage
You can create a new npc in several ways.</br>
```js
const dnd = require('dnd-npc');
const npc = new dnd({ raceType: "warforged", subRace: "juggernaut", roleType: "fighter"})
	.generate(); // Generates a Warforged-Juggernaut Fighter
```
```js
const dnd = require('dnd-npc');
const npc = new dnd()
	.raceType({ raceType: "warforged", subRace: "juggernaut"})
	.role("fighter")
	.generate(); // Generates a Warforged-Juggernaut Fighter
```
You can also overwrite settings that you have already input.
```js
const dnd = require('dnd-npc');
const npc = new dnd({ raceType: "warforged", subRace: "juggernaut", roleType: "fighter"})
	.raceType({ raceType: "human" })
	.role("bard")
	.generate(); // Generates a Human Bard (why u make bard tho?)
```
Leaving the raceType or role blank, or passing an invalid type to it, will result in that thing being randomly generated.
```js
const dnd = require('dnd-npc');
const npc = new dnd({ raceType: "warforged" })
	.generate(); // Generates a warforged with a random subrace and role.
```
You can also pass a sub race as the raceType and it will generate with the correct race and subrace.
```js
const dnd = require('dnd-npc');
const npc = new dnd({ raceType: "juggernaut" })
	.generate(); // Generates a warforged-Juggernaut with a random role.
```
---
## Information
After calling generate() you'll receive an object like this with all the details of the NPC.
Without calling generate() all you'll have is an object with a raceType and roleType property.

```js
{
	"character": {
		"name": String, // The name of the npc
		"gender": String // The gender of the npc
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
		"weapon": {
			"name": String, // The name of the weapon
			"link": String, // The link to the weapon on D&D Beyond
			"damageType": String, // What type of damage the weapon does. Bludgeoning, Piercing, Slashing etc.
			"damageAmount": String, // The damage done by the weapon.
			"vDamage": String, // The damage done if it's versatile being used two-handed
			"simple": Boolean, // Whether this weapon is classified as martial or simple
			"ranged": Boolean, // Whether or not the weapon is a ranged weapon
			"allowShield": Boolean, // Whether or not the weapon allows the use of a shield
			"properties": Array
		},
		"shield": Boolean, // Whether or not the NPC has a shield, if it does, this will instead be String with a link to shields on D&D Beyond
		"armor": { // Can also be undefined.
			"name": String, // The name of the armor
			"type": String, // The armor class
			"link": String, // Link to the armor on D&D Beyond
			"strength": Number, // The strength requirement for the armor
			"metal": Boolean, // Whether or not the armor is made of metal
			"stealth": Boolean // Whether or not the armor impedes the stealth of the NPC
		}, // Can also be undefined
		"tools": Array // May be empty
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
