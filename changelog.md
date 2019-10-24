<title>Changelog</title>
<div class="topnav">
		<a href="./index.html">Home</a>
		<a href="./qa.html">Q&A</a>
		<a href="./changelog.html">Changelog</a>
		<a href="./usage.html">Usage</a>
		<a href="./roleTypes.html">Roles</a>
		<a href="./raceTypes.html">Races</a>
</div>

# **Changelog**
All of the changes that have been made to the package, in a somewhat organized list.<br>
## **v1.1.5** *Upcoming*
### **Races**
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

For a full list of available races, [click here](./raceTypes.html)

### **\<NPC>#character#age**
Added NPC age.<br>
This is based on each race and their lifespans.<br>
<b>TypeOf:</b> <span class="yellow">Number</span>

### **\<NPC>#character#background**
Added NPC background.
Based on the role & race to give somewhat logical backgrounds.<br>
<b>TypeOf:</b> <span class="yellow">String</span>

### **\<NPC>#character#level**
Added NPC level.<br>
This will always be level 1.<br>
<b>TypeOf:</b> <span class="yellow">Number</span>
<hr>

## **v1.1.0**
### **\<NPC>#race#small**
`race#small` was removed in favor of `race#size`<br>
`race#size` is a string that contains the size of the npc. (Small, Medium, Large etc)<br>
<b>TypeOf:</b> <span class="yellow">String</span>

```diff
- npc.race.small
+ npc.race.size
```

### **\<NPC>#character#alignment**
Added NPC alignment. This is generated based on race and class chosen.<br>
(No chaotic evil Paladins, though technically not against the rules of D&D 5e)<br>
<b>TypeOf:</b> <span class="yellow">String</span>

### **NPC Constructor**
Changed how the NPC Constructor is called.<br>
This is so in the future more classes can be added for various things, such as generating monsters.

```diff
  const dnd = require('dnd-npc');
- const npc = new dnd({ ..options }).generate();
+ const npc = new dnd.npc({ ..options }).generate();
```
<hr>

## **v1.0.0**
\- Initial Release
