<title>Changelog</title>
<link rel="stylesheet" type="text/css" href="style.css">
<script defer src="./modules/functions.js"></script>


<h1><b>Changelog</b></h1>
All of the changes that have been made to the package, in a somewhat organized list.<br>
<h2 style="sideButton"><b>v1.1.5</b> <i>*Upcoming*</i></h2>
<button class="btn default" id="b1.1.5" onClick="showHide('b1.1.5', '1.1.5')" type="button">Show</button>
<div class="showHide" id="1.1.5">
<h3><b>Races</b></h3>
Added new <span class="yellow">raceType</span> & <span class="yellow">subRace</span>
<ul>
<li><a onclick="textHide('1.1.5 aasimar')">Aasimar</a></li>
<div class="showHide" id="1.1.5 aasimar">
<ul><li><a href="./raceTypes/aasimar-fallen.html">Fallen</a></li>
<li><a href="./raceTypes/aasimar-protector.html">Protector</a></li>
<li><a href="./raceTypes/aasimar-scourge.html">Scourge</a></li></ul></div>
<li><a href="./raceTypes/bugbear.html">Bugbear</a></li>
<li><a onclick="textHide('1.1.5 elf')">Elf</a></li>
<div class="showHide" id="1.1.5 elf">
<ul><li><a href="./raceTypes/dark.html">Dark</a></li></ul></div>
<li><a href="./raceTypes/firbolg.html">Firbolg</a></li>
<li><a onclick="textHide('1.1.5 gnome')">Gnome</a></li>
<div class="showHide" id="1.1.5 gnome">
<ul><li><a href="./raceTypes/gnome-deep.html">Deep</a></li>
<li><a href="./raceTypes/gnome-forest.html">Forest</a></li>
<li><a href="./raceTypes/gnome-rock.html">Rock</a></li></ul></div>
<li><a href="./raceTypes/goblin.html">Goblin</a></li>
<li><a href="./raceTypes/grung.html">Grung</a></li>
<li><a href="./raceTypes/hobgoblin.html">Hobgoblin</a></li>
<li><a href="./raceTypes/kenku.html">Kenku</a></li>
<li><a href="./raceTypes/kobold.html">Kobold</a></li>
<li><a href="./raceTypes/lizardfolk.html">Lizardfolk</a></li>
<li><a href="./raceTypes/orc.html">Orc</a></li>
<li><a href="./raceTypes/tabaxi.html">Tabaxi</a></li>
<li><a href="./raceTypes/triton.html">Triton</a></li>
<li><a href="./raceTypes/yuanti.html">Yuan-Ti</a></li></ul>

For a full list of available races, [click here](./raceTypes.html)

<h3><b>\<NPC>#character#age</b></h3>
Added NPC age.<br>
This is based on each race and their lifespans.<br>
<b>TypeOf:</b> <span class="yellow">Number</span>

<h3><b>\<NPC>#character#background</b></h3>
Added NPC background.
Based on the role & race to give somewhat logical backgrounds.<br>
<b>TypeOf:</b> <span class="yellow">String</span>

<h3> <b>\<NPC>#character#level</b></h3>
Added NPC level.<br>
This will always be level 1.<br>
<b>TypeOf:</b> <span class="yellow">Number</span>
</div>
<hr>
<h2 style="sideButton"><b>v1.1.0</b></h2>
<button class="btn default" id="b1.1.0" onClick="showHide('b1.1.0', '1.1.0')" type="button">Show</button>
<div class="showHide" id="1.1.0">
<h3><b>\<NPC>#race#small</b></h3>
`race#small` was removed in favor of `race#size`<br>
`race#size` is a string that contains the size of the npc. (Small, Medium, Large etc)<br>
<b>TypeOf:</b> <span class="yellow">String</span>

```diff
- npc.race.small
+ npc.race.size
```

<h3><b>\<NPC>#character#alignment</b></h3>
Added NPC alignment. This is generated based on race and class chosen.<br>
(No chaotic evil Paladins, though technically not against the rules of D&D 5e)<br>
<b>TypeOf:</b> <span class="yellow">String</span>

<h3><b>NPC Constructor</b></h3>
Changed how the NPC Constructor is called.<br>
This is so in the future more classes can be added for various things, such as generating monsters.

```diff
  const dnd = require('dnd-npc');
- const npc = new dnd({ ..options }).generate();
+ const npc = new dnd.npc({ ..options }).generate();
```
</div>
<hr>
<h2><b>v1.0.0</b>
\- Initial Release
