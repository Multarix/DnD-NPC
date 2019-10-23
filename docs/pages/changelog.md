# **Changelog**
All of the changes that have been made to the package, in a somewhat organised list.

---
## **v1.1.5** ***Upcoming***
## Races
Some new `raceType`'s and `subRace`'s have been added.
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

For a full list of available races, [click here](./pages/raceTypes.md).


#### NPC#character#age
Added NPC age.<br>
This is based on each race and their lifespans.<br>
**typeof:** Number

```diff
+ npc.character.age
```
#### NPC#character#background
Added NPC background.<br>
Based on the role to give somewhat logical backgrounds.<br>
**typeof:** String

```diff
+ npc.character.background
```
#### NPC#character#level
Added NPC level.<br>
This will always be level 1.<br>
**typeof:** Number

```diff
+ npc.character.level
```

---
## **v1.1.0**
#### NPC#race#small
`race#small` was removed in favor of `race#size`<br>
`race#size` is a string that contains the size of the npc. (Small, Medium, Large etc)
```diff
- npc.race.small // Boolean
+ npc.race.size // String
```
#### NPC#character#alignment
Added NPC alignment. This is generated based on race and class chosen.<br>
(No chaotic evil Paladins, though technically not against the rules of D&D 5e)

```diff
+ npc.character.alignment // String
```


#### NPC Constructor
Changed how the NPC Constructor is called.<br>
This is so in the future more classes can be added for various things, such as generating monsters.
```diff
const dnd = require('dnd-npc');
- const npc = new dnd({ ..options }).generate();
+ const npc = new dnd.npc({ ..options }).generate();
```
---
### **v1.0.0**
- Initial Release
