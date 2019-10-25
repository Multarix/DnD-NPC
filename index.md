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
		<p>A friend of mine told me that generating random NPCs would be a difficult task.
		So I decided to make this to prove him wrong.<br>
		<br>
		This module can be integrated into a project to create random NPCs.<br>
		A DM should find the wide range of information this module generates to be extremely useful to create NPCs for their own adventure or on the fly.</p>
	</div>
	<div class="mid"></div>
	<div class="column">
		<h1 class="centered"><b>Who U?</b></h1>
		<p class="centered">I'm Multarix, an aspiring programmer (I Guess??).<br>
		Despite what you may think, when I started this project,
		I actually had zero knowledge of D&D, but have since dove
		into this world of dice and dragons.<br>
		<br>
		I suck at web development so if you think this website is poorly designed, you now know why.</p>
	</div>
</div>
