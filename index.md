<link rel="stylesheet" type="text/css" href="/modules/css/index.css">
<script>const page = "home"</script>
<div class="background"></div>
<a class="npmLink" href="https://nodei.co/npm/dnd-npc/"><img class="npm" src="https://nodei.co/npm/dnd-npc.png?compact=true"></a>
<p style="text-align: center">D&D-NPC is a <a href="https://nodejs.org">Node.js</a> module allows you to easily create randomized D&D NPCs.<br>
	It takes up to 3 arguments and will randomly generate an NPC based on arguments passed.</p>

<pre>
<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> npc <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">npc</span>()
  .<span class="function">raceType</span>({ <span class="json">raceType</span><span class="require">:</span> <span class="string">"Warforged"</span>, <span class="json">subRace</span><span class="require">:</span> <span class="string">"Juggernaut"</span> })
  .<span class="function">roleType</span>({ <span class="json">roleType</span><span class="require">:</span> <span class="string">"Fighter"</span> })
  .<span class="function">generate</span>(); <span class="comment">// Generates a Warforged-Juggernaut Fighter</span>
</pre>
<div class="row">
	<div class="columnLeft">
		<h1 class="center"><b>Y Tho?</b></h1>
		<p>A friend of mine told me that generating random NPCs would be a difficult task.
		So I decided to make this to prove him wrong.<br>
		<br>
		This module can be integrated into a project to create random NPCs.<br>
		A DM should find the wide range of information this module generates to be extremely useful to create NPCs for their own adventure or on the fly.</p>
	</div>
	<div class="columnRight">
		<h1 class="center"><b>Who U?</b></h1>
		<p>I'm Multarix, a NodeJS programmer (I Guess?).<br>
		Despite what you may think, when I started this project,
		I actually had zero knowledge of D&D, but have since dove
		into this world of dice and dragons.<br>
		<br>
		I suck at web development so if you think this website is poorly designed, you know why.</p>
	</div>
</div>
