<title>Welcome</title>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="home.css">

<img src="dndlogo.png" alt="D&D Logo" class="center">
<h1 class="title"><b>D&D NPC</b></h1>
<p class="centered">D&D-NPC is a <a href="https://nodejs.org">Node.js</a> module allows you to easily create randomized D&D NPCs.<br>
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
		<h1 class="centered"><b>Y Tho?</b></h1>
		<p class="centered">Because I can and if you question me, I'll ban you from my minecraft server.</p>
	</div>
	<div class="column">
		<h1 class="centered"><b>Who U?</b></h1>
		<p class="centered">I'm your worst nightmare.</p>
	</div>
</div>
