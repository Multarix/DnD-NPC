<script defer src="./modules/functions.js"></script>
<title>D&D NPC</title>
<link rel="stylesheet" type="text/css" href="style.css">
<div class="sidenav">
<a href="./home.html">Home</a>
<a href="./changelog.html">Changelog</a>
<a href="./qa.html">Q&A</a>
<hr>
<a href="./usage.html">Usage</a>
<a href="./roleTypes.html">Role Types</a>
<a href="./raceTypes.html">Race Types</a>
</div>

# Changelog
All of the changes that have been made to the package, in a somewhat organized list.<br>
<br>
## v1.1.5 *Upcoming*
### Races
<button class="btn default" id="b115Races" onClick="showHide('b115Races', 't115Races')" type="button">Show</button>
<br>

Added new `raceType` and `subRace`
- Aasimar
	- Fallen
	- Protector
	- Scourge
- Bugbear
- Elf
	- Dark
- Firbolg
- Gnome
	- Deep
	- Forest
	- Rock
- Goblin
- Grung
- Hobgoblin
- Kenku
- Kobold
- Lizardfolk
- Orc
- Tabaxi
- Triton
- Yuan-Ti
<small>For a full list of available races, <a href ="./raceTypes.html">click here</a></small>
</div><br>
### NPC#character#age</h3>
<button class="btn default" id="b115Age" onClick="showHide('b115Age', 't115Age')" type="button">Show</button><br>
<div class="showHide" id="t115Age">
Added NPC age.<br>
This is based on each race and their lifespans.<br>
<b>TypeOf: </b><span class ="typeof">Number</span><br>
</div><br>
### NPC#character#background</h3>
<button class="btn default" id="b115BG" onClick="showHide('b115BG', 't115BG')" type="button">Show</button><br>
<div class="showHide" id="t115BG">
	Added NPC background.<br>
	Based on the role & race to give somewhat logical backgrounds.<br>
	<b>TypeOf: </b><span class ="typeof">String</span><br>
</div><br>
### NPC#character#level</h3>
<button class="btn default" id="b115Lvl" onClick="showHide('b115Lvl', 't115Lvl')" type="button">Show</button><br>
<div class="showHide" id="t115Lvl">
	Added NPC level.<br>
	This will always be level 1.<br>
	<b>TypeOf: </b><span class ="typeof">Number</span><br>
</div>
<hr>
## v1.1.0</h2>
### NPC#race#small</h3>
<button class="btn default" id="b110small" onClick="showHide('b110small', 't110small')" type="button">Show</button><br>
<div class="showHide" id="t110small">
`race#small` was removed in favor of `race#size`<br>
`race#size` is a string that contains the size of the npc. (Small, Medium, Large etc)<br>
<b>TypeOf: </b><span class ="typeof">String</span><br>
<pre class="code">
<span class="removed"> - npc.race.small</span>
<span class="added"> + npc.race.size</span></pre>
</div><br>
### NPC#character#alignment</h3>
<button class="btn default" id="b110Ali" onClick="showHide('b110Ali', 't110Ali')" type="button">Show</button><br>
<div class="showHide" id="t110Ali">
Added NPC alignment. This is generated based on race and class chosen.<br>
(No chaotic evil Paladins, though technically not against the rules of D&D 5e)<br>
<b>TypeOf: </b><span class ="typeof">String</span><br>
</div><br>
### NPC Constructor</h3>
<button class="btn default" id="b110Con" onClick="showHide('b110Con', 't110Con')" type="button">Show</button><br>
<div class="showHide" id="t110Con">
Changed how the NPC Constructor is called.<br>
This is so in the future more classes can be added for various things, such as generating monsters.<br>
<br>
<pre class= "code">
<span class="key">   const</span> dnd <span class="oper">= require</span>(<span class="str">'dnd-npc'</span>);
<span class="removed"> - const npc = new dnd({ ..options }).generate();</span>
<span class="added"> + const npc = new dnd.npc({ ..options }).generate();</span></pre>
</div>
<hr>
## v1.0.0</h2>
- Initial Release
