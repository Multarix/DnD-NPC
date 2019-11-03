<script>const page = "class"</script>
<a name="top"></a>
<h1 class="title"><b>NPC Class</b></h1>
<h3><a class="method" name="constructor" href="#constructor"><b>.constructor(<span class="args">{ <i>...arguments</i> }</span>)</b></a></h3>
<div class="embed">
  <p class="description">This is called when you create a new NPC.<br>
  It takes a single Object with the below properties. All properties are optional.</p>
  <h4><b>Options</b></h4>
  <table>
  <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
  </tr><tr>
    <td>raceType</td>
    <td>String</td>
    <td>Sets the race of the NPC</td>
  </tr><tr>
    <td>subRace</td>
    <td>String</td>
    <td>Sets the sub-race of the NPC if applicable</td>
  </tr><tr>
    <td>roleType</td>
    <td>String</td>
    <td>Sets the role of the NPC</td>
  </tr>
  </table>
</div><br>
<h2><b>Methods</b></h2>
<h3><a class="method" name="raceType" href="#raceType"><b>.raceType(<span class="args">{ <i>...arguments</i> }</span>)</b></a></h3>
<div class="embed">
  <p class="description">Sets the race of the NPC.<br>
	It can take a single Array or Object or up to 2 Strings as arguments.<br>
	For Strings: The first will be the raceType and the second will be the subRace.<br>
	For an Array: The first element will be used for the raceType and the second will be used for the subRace<br>
	For an Object: The object should contain the below properties. All properties are optional.<br></p>
  <h4><b>Options</b></h4>
  <table>
  <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
  </tr><tr>
    <td>raceType</td>
    <td>String</td>
    <td>Sets the race of the NPC</td>
  </tr><tr>
    <td>subRace</td>
    <td>String</td>
    <td>Sets the sub-race of the NPC if applicable<br></td>
  </tr>
  </table>
  <p class="returns">Returns: <a href="#top">this</a></p>
</div><br>
<hr>

<h3><a class="method" name="roleType" href="#roleType"><b>.roleType(<span class="args">{ <i>...arguments</i> }</span>)</b></a></h3>
<div class="embed">
  <p class="description">Sets the role of the NPC<br>
		It can take a single Array or Object or String as Arguments<br>
		For an Array: The first element will be used for the roleType<br>
		For an Object: The object should contain the below properties. All properties are optional.<br></p>
  <h4><b>Options</b></h4>
  <table>
  <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
  </tr><tr>
    <td>roleType</td>
    <td>String</td>
    <td>Sets the role of the NPC</td>
  </tr>
  </table>
  <p class="returns">Returns: <a href="#top">this</a></p>
</div><br>
<hr>

<h3><a class="method" name="generate" href="#generate"><b>.generate()</b></a></h3>
<div class="embed">
  <p>Use this method when you're ready to generate all aspects of your NPC.<br>
		After using this, you'll recieve an NPC object.</p>
  <p class="returns">Returns: <a href="./npc/object">npc object</a></p>
</div><br>
<hr>

<h2><a class="method" name="examples" href="#examples"><b>Example Usage</b></a></h2>

```js
/* Generates a Warforged-Juggernaut Fighter */
const obj = {
  raceType: "warforged",
  subRace: "juggernaut",
  roleType: "fighter"
};

const dnd = require('dnd-npc');
const npc = new dnd.npc(obj)
  .generate();
```
```js
/* Generates a Warforged-Juggernaut Fighter */
const dnd = require('dnd-npc');
const npc = new dnd.npc()
  .raceType({ raceType: "warforged", subRace: "juggernaut"})
  .roleType("fighter")
  .generate();
```

You can overwrite settings that you have already input.
```js
/* Generates a Human Bard (why u make Bard tho?) */
const obj = {
  raceType: "warforged",
  subRace: "juggernaut",
  roleType: "fighter"
};

const dnd = require('dnd-npc');
const npc = new dnd.npc(obj)
  .raceType({ raceType: "human" })
  .roleType("bard")
  .generate();
```
Leaving the raceType or roleType blank, or passing an invalid type to it, will result in that thing being randomly generated.
```js
/* Generates a Warforged with a random sub-race and role */
const obj = { raceType: "warforged" };

const dnd = require('dnd-npc');
const npc = new dnd.npc(obj)
  .generate();
```
Passing a sub-race as the raceType and it will generate with the correct race and sub-race.
```js
/* Generates a Warforged-Juggernaut with a random role. */
const obj = { raceType: "juggernaut" };

const dnd = require('dnd-npc');
const npc = new dnd.npc({ raceType: "juggernaut" })
  .generate();
```
