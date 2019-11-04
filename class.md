<script>const page = "class"</script>

<h1 class="center title"><b>Classes</b></h1>
<p class="center">All the available classes of the package.</p>

<h2><a href="{{ site.baseurl }}/class/npc"><b>NPC Class</b></a></h2>
<div class="embed">
	<p>Generate a D&D NPC.</p>
	<h3>Example Usage</h3>
<pre>
<span class="comment">/* Generate a Warforged-Juggernaut Fighter */</span>
<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> npc <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">npc</span>()
  .<span class="function">raceType</span>({ <span class="json">raceType</span><span class="require">:</span> <span class="string">"Warforged"</span>, <span class="json">subRace</span><span class="require">:</span> <span class="string">"Juggernaut"</span> })
  .<span class="function">roleType</span>({ <span class="json">roleType</span><span class="require">:</span> <span class="string">"Fighter"</span> })
  .<span class="function">generate</span>();
</pre>
</div><br>

<h2><a href="{{ site.baseurl }}/class/monster"><b>Monster Class</b></a><small> <span class="gray"><i>Upcoming</i></span></small></h2>
<div class="embed">
	<p>Output a single or an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a> of monsters.</p>
	<h3>Example Usage</h3>
<pre>
<span class="comment">/* Gets an Array of Monsters Objects that contain "red" in their name */</span>
<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> monster <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">monster</span>()
  .<span class="function">searchAll</span>(<span class="string">"red"</span>);
</pre>
</div><br>

<h2><a href="{{ site.baseurl }}/class/encounter"><b>Encounter Class</b></a><small> <span class="gray"><i>Not Implemented</i></span></small></h2>
<div class="embed">
	<p>Generate an encounter with the specified challenge</p>
	<h3>Example Usage</h3>
<pre>
<span class="comment">/* Generates an encounter designed for 5 players with a challenge rating of 7 */</span>
<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> encounter <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">encounter</span>()
  .<span class="function">players</span>(<span class="bool">5</span>)
  .<span class="function">challenge</span>(<span class="bool">7</span>)
  .<span class="function">generate</span>();
</pre>
</div>
