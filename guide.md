<script>const page = "class"</script>
<h1 class="title"><b>NPC Class</b></h1>
<h3><a class="method" name="constructor" href="#constructor"><b>.constructor(<span class="args">{ <i>raceType, subRace, classType</i> }</span>)</b></a></h3>
<div class="embed">
	<p class="description">This is called when you create a new NPC.<br>
	It takes a single Object with the below properties. All properties are optional.<br>
	A full list of valid classTypes can be found <a href="{{ site.baseurl }}/class/classTypes">here</a><br>
	A full list of valid raceTypes can be found <a href="{{ site.baseurl }}/class/raceTypes">here</a></p>
	<h4><b>Options</b></h4>
	<table>
	<tr>
		<th>Argument</th>
		<th>Type</th>
		<th>Description</th>
		<th>Optional</th>
	</tr><tr>
		<td>raceType</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the race of the NPC</td>
		<td>True</td>
	</tr><tr>
		<td>subRace</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the sub-race of the NPC if applicable</td>
		<td>True</td>
	</tr><tr>
		<td>classType</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the class of the NPC</td>
		<td>True</td>
	</tr>
	</table>
</div><br>
<h2><b>Methods</b></h2>
<h3><a class="method" name="setRace" href="#setRace"><b>.setRace(<span class="args"><i>raceType, subRace</i></span>)</b></a></h3>
<div class="embed">
	<p class="description">Sets the race of the NPC.<br>
	Takes up to 2 Strings as arguments, and sets the race of the NPC to generate<br>
	<br></p>
	<h4><b>Options</b></h4>
	<table>
	<tr>
		<th>Argument</th>
		<th>Type</th>
		<th>Description</th>
		<th>Optional</th>
	</tr><tr>
		<td>raceType</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the race of the NPC</td>
		<td>False</td>
	</tr><tr>
		<td>subRace</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the sub-race of the NPC if applicable<br></td>
		<td>True</td>
	</tr>
	</table>
	<p>Returns: <a href="#top">this</a></p>
</div><br>
<hr>

<h3><a class="method" name="setClass" href="#setClass"><b>.setClass(<span class="args"><i>classType</i></span>)</b></a></h3>
<div class="embed">
	<p class="description">Sets the class of the NPC<br>
		Takes a single string as an argument.<br>
		</p>
	<h4><b>Options</b></h4>
	<table>
	<tr>
		<th>Argument</th>
		<th>Type</th>
		<th>Description</th>
		<th>Optional</th>
	</tr><tr>
		<td>classType</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the class of the NPC</td>
		<td>False</td>
	</tr>
	</table>
	<p>Returns: <a href="#top">this</a></p>
</div><br>
<hr>

<h3><a class="method" name="generate" href="#generate"><b>.generate()</b></a></h3>
<div class="embed">
	<p>Use this method when you're ready to generate all aspects of your NPC.<br>
		After using this, you'll recieve an NPC object.<br><br>
		⚠️ You can only use #generate() once per npc instance. Additional uses will simply return the same character.</p>
	<p>Returns: <a href="{{ site.baseurl }}/objects">Promise&lt;Character: Object&gt;</a></p>
</div><br>
<hr>

<h2><a class="method" name="examples" href="#examples"><b>Example Usage</b></a></h2>
<pre><code>import NPC from 'dnd-npc';

const obj = {
	raceType: "warforged",
	subRace: "juggernaut",
	classType: "fighter"
}

const npc = new NPC(obj)

// Generates a Warforged-Juggernaut Fighter
const character = await npc.generate();
</code></pre>
<pre><code class="language-javascript">import NPC from 'dnd-npc';
const npc = new NPC()
	.setRace("warforged", "juggernaut")
	.setClass("fighter");

// Generates a Warforged-Juggernaut Fighter
const character = await npc.generate();
</code></pre>

<p>You can overwrite settings that you have already input.</p>
<pre><code class="language-javascript">import NPC from 'dnd-npc';

const obj = {
	raceType: "warforged",
	subRace: "juggernaut",
	classType: "fighter"
}

const npc = new NPC(obj)
	.setRace("human")
	.setClass("bard");
	
// Generates a Human Bard (why u make Bard tho?)
const character = await npc.generate();
</code></pre>

<p>Passing a sub-race as the raceType and it will generate with the correct race and sub-race.</p>
<pre><code class="language-javascript">import NPC from 'dnd-npc';
const npc = new NPC({ classType: "juggernaut" });

// Generates a Warforged-Juggernaut with a random class.
const character = await npc.generate();
</code></pre>

<p>Leaving the raceType or classType blank, or passing an invalid type to it, will result in that thing being randomly generated.</p>
<pre><code class="language-javascript">import NPC from 'dnd-npc';
const npc = new NPC({ raceType: "warforged" });

// Generates a Warforged with a random sub-race and class.
const character = await npc.generate();
</code></pre>
<pre><code class="language-javascript">import NPC from 'dnd-npc';
const npc = new NPC({ classType: "fighter" });

// Generates a fighter with a random race
const character = await npc.generate();
</code></pre>
<pre><code class="language-javascript">import NPC from 'dnd-npc';
const npc = new NPC();

// Generates a completely random character.
const character = await npc.generate();
</code></pre>