<title>Welcome</title>
<link rel="stylesheet" type="text/css" href="style.css">


# D&D NPC
<p>DnD-NPC is a <a href="https://nodejs.org">Node.js</a> module allows you to easily create randomized D&D NPCs.</p>

```js
const dnd = require('dnd-npc');
const npc = new dnd.npc()
	.raceType({ raceType: "Warforged", subRace: "Juggernaut" })
	.roleType({ roleType: "Fighter" })
	.generate(); // Generates a Warforged-Juggernaut Fighter
```
