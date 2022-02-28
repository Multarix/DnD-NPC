<script>const page = "changelog"</script>

<h1 class="title center"><b>Changelog</b></h1>
<p class= "center">All of the changes that have been made to the package, in a somewhat organized list.</p>
<h1><a class="method" name="1.1.5" href="#1.1.5"><b>v1.1.5</b></a><small><span class="gray"><i> Current Version</i></span></small></h1>
<h2><b>Breaking Changes</b></h2>
<h3 style="font-size: 16px"><b>&lt;NPC&gt;#class</b></h3>
<div class="embed">
	<p><span class="literal">&lt;NPC&gt;#class</span> was changed to <span class="literal">&lt;NPC&gt;#role</span> for better code consistency.</p>
	<pre><span class="red">- npc.class</span><br><span class="green">+ npc.role</span></pre>
</div><br>
<h2><b>Additions</b></h2>
<h3 style="font-size: 16px"><b>Races</b></h3>
<div class="embed">
	<p>Added new race and sub-race types.</p>
	<div class="embedRow">
		<div class="embedLeft">
			<ul>
			<li><a onclick="textHide(false)">Aasimar</a></li>
			<ul><li><a href="{{ site.baseurl }}/class/npc/raceTypes/aasimar-fallen">Fallen</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/aasimar-protector">Protector</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/aasimar-scourge">Scourge</a></li></ul>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/bugbear">Bugbear</a></li>
			<li><a onclick="textHide('false')">Elf</a></li>
			<ul><li><a href="{{ site.baseurl }}/class/npc/raceTypes/elf-dark">Dark</a></li></ul>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/firbolg">Firbolg</a></li>
			<li><a onclick="textHide(false)">Gnome</a></li>
			<ul><li><a href="{{ site.baseurl }}/class/npc/raceTypes/gnome-deep">Deep</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/gnome-forest">Forest</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/gnome-rock">Rock</a></li></ul>
			</ul>
		</div>
		<div class="embedRight">
			<ul>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/goblin">Goblin</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/grung">Grung</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/hobgoblin">Hobgoblin</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/kenku">Kenku</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/kobold">Kobold</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/lizardfolk">Lizardfolk</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/orc">Orc</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/tabaxi">Tabaxi</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/triton">Triton</a></li>
			<li><a href="{{ site.baseurl }}/class/npc/raceTypes/yuanti">Yuan-Ti</a></li>
			</ul>
		</div>
	</div>
	<br><p>For a full list of available races, <a href="{{ site.baseurl }}/class/npc/raceTypes">click here</a></p>
</div><br>

<h3 style="font-size: 16px"><b>&lt;NPC&gt;#character#age</b></h3>
<div class="embed">
	<p>Added NPC age.<br>
	This is based on each race and their lifespans.<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></p>
</div><br>

<h3 style="font-size: 16px"><b>&lt;NPC&gt;#character#background</b></h3>
<div class="embed">
	<p>Added NPC background.<br>
	Based on the role & race to give somewhat logical backgrounds.<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>
</div><br>

<h3 style="font-size: 16px"><b>&lt;NPC&gt;#character#level</b></h3>
<div class="embed">
	<p>Added NPC level.<br>
	This will always be level 1.<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></p>
</div><br>
<hr>
<h1><a class="method" name="1.1.0" href="#1.1.0"><b>v1.1.0</b></a></h1>
<h2><b>Breaking Changes</b></h2>
<h3 style="font-size: 16px"><b>NPC Constructor</b></h3>
<div class="embed">
	<p>Changed how the NPC Constructor is called.<br>
	This is so in the future more classes can be added for various things, such as generating monsters.</p>
	<pre>  const dnd = require('dnd-npc');<br><span class="red">- const npc = new dnd({ ..options }).generate();</span><br><span class="green">+ const npc = new dnd.npc({ ..options }).generate();</span></pre>
</div><br>
<h3 style="font-size: 16px"><b>&lt;NPC&gt;#race#small</b></h3>
<div class="embed">
	<p><span class="literal">race#small</span> was removed in favor of <span class="literal">race#size</span><br>
	This is a string that contains the size of the npc. (Small, Medium, Large etc)<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>
	<pre><span class="red">- npc.race.small</span><br><span class="green">+ npc.race.size</span></pre>
</div><br>
<h2><b>Additions</b></h2>
<h3 style="font-size: 16px"><b>&lt;NPC&gt;#character#alignment</b></h3>
<div class="embed">
	<p>Added NPC alignment. This is generated based on race and class chosen.<br>
	(No chaotic evil Paladins, though technically not against the rules of D&D 5e)<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>
</div><br>
<hr>
<h1><a class="method" name="1.0.0" href="#1.0.0"><b>v1.0.0</b></a></h1>
<div class="embed"><p>- Initial Release</p></div>
