[![NPM](https://nodei.co/npm/dnd-npc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dnd-npc/)

# **About**
DnD-NPC is a [Node.js](https://nodejs.org) module allows you to easily create randomized D&D NPCs.<br>
<br>
For a complete list of previous changes, see [here](https://multarix.github.io/DnD-NPC//changelog.html).<br>

### ⚠️ Version 2.0 updated the entire codebase to be compatible with ES modules, which means you can no longer load it with require(). You must use import instead.<br>
v2.0 also has many other breaking changes, it's recommended that you read the changelog before updating<br>

---
## **Usage:**
You can create a new npc in several ways.<br>
```js
import dnd from 'dnd-npc';
const npc = new dnd.npc({ raceType: "warforged", subRace: "juggernaut", roleType: "fighter"})
	.generate(); // Generates a Warforged-Juggernaut Fighter
```
```js
import dnd from 'dnd-npc';
const npc = new dnd.npc()
	.setRace("warforged", "juggernaut")
	.setClass("fighter")
	.generate(); // Generates a Warforged-Juggernaut Fighter
```
You can also overwrite settings that you have already input.
```js
import dnd from 'dnd-npc';
const npc = new dnd.npc({ raceType: "warforged", subRace: "juggernaut", roleType: "fighter"})
	.setRace("human")
	.setClass("bard")
	.generate(); // Generates a Human Bard (why u make Bard tho?)
```
You can also pass a sub-race as the raceType and it will generate with the correct race and sub-race.
```js
import dnd from 'dnd-npc';
const npc = new dnd.npc({ raceType: "juggernaut" })
	.generate(); // Generates a Warforged-Juggernaut with a random role.
```
Leaving the raceType or roleType blank, or passing an invalid type to it, will result in that thing being randomly generated.
```js
import dnd from 'dnd-npc';
const npc = new dnd.npc({ raceType: "warforged" })
	.generate(); // Generates a Warforged with a random sub-race and role.
```
```js
import dnd from 'dnd-npc';
const npc = new dnd.npc({ roleType: "fighter" })
	.generate(); // Generates a fighter with a random race
```
```js
import dnd from 'dnd-npc';
const npc = new dnd.npc()
	.generate(); // Generates a completely random character.
```

---
## **Output:**
After using the #generate() method, you'll receive an object like this with all the details of the NPC.<br>
⚠️ You can only use #generate() once per npc instance. Additional uses will simply return the class itself.
```js
{
	"character": CharacterData,
	"race": RaceData,
	"class": ClassData,
	"inventory": InventoryData
};
```
The Object type definitions can be found below:
```js
CharacterData = {
	name: String,
	gender: String,
	alignment: String,
	age: Number,
	background: String,
	level: Number
}

RaceData = {
	name: String,
	link: String,
	size: String,
	speed: Number
}

ClassData = {
	name: String,
	link: String,
	stats: {
		strength: StatData,
		dexterity: StatData,
		constitution: StatData,
		intelligence: StatData,
		wisdom: StatData,
		charisma: StatData
	}
}

StatData = {
	total: Number,
	prof: Number
}

InventoryData = {
	weapon: WeaponData,
	armor: ArmorData,
	shield: Boolean,
	tools: [ToolData]
}

WeaponData = {
	name: String,
	link: String,
	damageType: String,
	damage: String,
	versatileDamage: String || undefined,
	simple: Boolean,
	ranged: Boolean,
	allowsShield: Boolean,
	properties: [String]
}

ArmorData = {
	name: String,
	type: String,
	link: String,
	strength: Number,
	isMetal: Boolean,
	isStealthy: Boolean
}

ToolData = {
	name: String,
	link: String
}
```


## **Valid `raceType` and `subRace`**
- Aarakocra
- Aasimar
	- Fallen
	- Protector
	- Scourge
- Bugbear
- Changeling
- Dragonborn
- Dwarf
	- Hill
	- Mountain
- Elf
	- Dark
	- Eladrin
	- High
	- Wood
- Firbolg
- Genasi
	- Air
	- Earth
	- Fire
	- Water
- Gnome
	- Deep
	- Forest
	- Rock
- Goblin
- Goliath
- Grung
- Halfelf
- Halfling
	- Lightfoot
	- Stout
- Halforc
- Hobgoblin
- Human
- Kalashtar
- Kenku
- Kobold
- Lizardfolk
- Orc
- Shifter
	- Beasthide
	- Longtooth
	- Swiftstride
	- Wildhunt
- Tabaxi
- Tiefling
- Triton
- Warforged
	- Envoy
	- Juggernaut
	- Skirmisher
- Yuanti
---
## **Valid `roleType`**
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

## **Need help?**
If you need any extra help, feel free to hit me up on [discord](https://discord.gg/UHUCNG9TEV).<br>
If you've encountered a bug or would like to suggest a feature, feel free to create either a pull request or an issue on the [github](https://github.com/Multarix/DnD-NPC).
