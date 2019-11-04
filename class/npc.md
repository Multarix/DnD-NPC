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
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the race of the NPC</td>
	</tr><tr>
		<td>subRace</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the sub-race of the NPC if applicable</td>
	</tr><tr>
		<td>roleType</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
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
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
		<td>Sets the race of the NPC</td>
	</tr><tr>
		<td>subRace</td>
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
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
		<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
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
	<p class="returns">Returns: <a href="{{ site.baseurl }}/class/npc/object">&lt;NPC: Object&gt;</a></p>
</div><br>
<hr>

<h2><a class="method" name="examples" href="#examples"><b>Example Usage</b></a></h2>
<pre>
<span class="comment">/* Generates a Warforged-Juggernaut Fighter */</span>
<span class="keyword">const</span> obj = {
	<span class="json">raceType</span><span class="require">:</span> <span class="string">"Warforged"</span>,
	<span class="json">subRace</span><span class="require">:</span> <span class="string">"Juggernaut"</span>,
	<span class="json">roleType</span><span class="require">:</span> <span class="string">"Fighter"</span>
};

<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> npc <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">npc</span>(obj)
	.<span class="function">generate</span>();
</pre>
<pre>
<span class="comment">/* Generates a Warforged-Juggernaut Fighter */</span>
<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> npc <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">npc</span>()
	.<span class="function">raceType</span>({ <span class="json">raceType</span><span class="require">:</span> <span class="string">"Warforged"</span>, <span class="json">subRace</span><span class="require">:</span> <span class="string">"Juggernaut"</span>})
	.<span class="function">roleType</span>(<span class="string">"Fighter"</span>)
	.<span class="function">generate</span>();
</pre>

<p>You can overwrite settings that you have already input.</p>
<pre>
<span class="comment">/* Generates a Human Bard (why u make Bard tho?) */</span>
<span class="keyword">const</span> obj = {
	<span class="json">raceType</span><span class="require">:</span> <span class="string">"Warforged"</span>,
	<span class="json">subRace</span><span class="require">:</span> <span class="string">"Juggernaut"</span>,
	<span class="json">roleType</span><span class="require">:</span> <span class="string">"Fighter"</span>
};

<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> npc <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">npc</span>(obj)
	.<span class="function">raceType</span>({ <span class="json">raceType</span><span class="require">:</span> <span class="string">"Human"</span> })
	.<span class="function">roleType</span>(<span class="string">"Bard"</span>)
	.<span class="function">generate</span>();
</pre>
<p>Leaving the raceType or roleType blank, or passing an invalid type to it, will result in that thing being randomly generated.</p>
<pre>
<span class="comment">/* Generates a Warforged with a random sub-race and role */</span>
<span class="keyword">const</span> obj = { <span class="json">raceType</span><span class="require">:</span> <span class="string">"Warforged"</span> };

<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> npc <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">npc</span>(obj)
	.<span class="function">generate</span>();
</pre>
<p>Passing a sub-race as the raceType and it will generate with the correct race and sub-race.</p>
<pre>
<span class="comment">/* Generates a Warforged-Juggernaut with a random role. */</span>
<span class="keyword">const</span> dnd <span class="require">= require</span>(<span class="string">'dnd-npc'</span>);
<span class="keyword">const</span> npc <span class="require">=</span> <span class="keyword">new</span> dnd.<span class="json">npc</span>({ <span class="json">raceType</span><span class="require">:</span> <span class="string">"Juggernaut"</span> })
	.<span class="function">generate</span>();
</pre>
