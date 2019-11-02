<title>classes</title>
<script>const page = "class"</script>

# **Classes**
All the available classes of the package.

### [NPC](./class/npc.html)
Generate a D&D NPC.
```js
const dnd = require('dnd-npc');
const npc = new dnd.npc({ raceType: "warforged", subRace: "juggernaut", roleType: "fighter"})
	.generate(); // Generates a Warforged-Juggernaut Fighter
```

### [Monster](./class/monster.html)
Output a single/ array of monster(s).
```js
const dnd = require('dnd-npc');
const monster = new dnd.monster()
	.searchAll("Red"); // Gets an Array of Monsters Objects that contain "red" in their name.
```

### [Encounter](./class/encounter.html)
<small>This will be released in a future update
<br>Expected Syntax:</small>
```js
const dnd = require('dnd-npc');
const encounter = new dnd.encounter({ players: 5, challenge: 7})
 	.generate(); // Generates a monster encounter designed for 5 players with a challenge rating of 7.
```
