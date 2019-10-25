<title>Welcome</title>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="home.css">


<h1 class="centered"><b>D&D NPC<b></h1>
<p>D&D-NPC is a <a href="https://nodejs.org">Node.js</a> module allows you to easily create randomized D&D NPCs.<br>
It takes up to 3 arguments and will randomly generate an NPC based on arguments passed.</p>

```js
const dnd = require('dnd-npc');
const npc = new dnd.npc()
	.raceType({ raceType: "Warforged", subRace: "Juggernaut" })
	.roleType({ roleType: "Fighter" })
	.generate(); // Generates a Warforged-Juggernaut Fighter
```
<div class="row">
	<div class="column">
		<h1 class="centered"><b>Why Tho?</b></h1>
		<p>Blah blah blah blah blah blah blah blah blah</p>
	</div>
	<div class="column">
		<h1 class="centered"><b>About</b></h1></div>
		<p>Blah blah blah blah blah blah blah blah blah</p>
</div>
