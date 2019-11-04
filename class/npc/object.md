<script>const page = "class";</script>
<h1 class="center title"><b>NPC Object</b></h1>
<p class="center">A list of all the properties relating to the NPC</p>
<br>
<h2><b>NPC#character</b></h2>
<div class="embed">
	<p>Description</p>
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>name</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The name of the NPC</td>
		</tr><tr>
			<td>gender</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The gender of the NPC</td>
		</tr><tr>
			<td>alignment</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The alignment of the NPC</td>
		</tr><tr>
			<td>age</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
			<td>The age of the NPC</td>
		</tr><tr>
			<td>background</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The type of background that this NPC has</td>
		</tr><tr>
			<td>level</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
			<td>The level of the NPC. This should always be level 1</td>
		</tr>
	</table>
</div><br>

<h2><b>NPC#race</b></h2>
<div class="embed">
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>name</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The name of the race</td>
		</tr><tr>
			<td>link</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>Link to the race on D&D Beyond</td>
		</tr><tr>
			<td>size</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The size of the race Small, Medium etc</td>
		</tr><tr>
			<td>speed</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
			<td>The base movement speed of the race</td>
		</tr>
	</table>
</div><br>

<h2><b>NPC#role</b></h2>
<div class="embed">
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>name</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The name of the role</td>
		</tr><tr>
			<td>link</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>link to the class on D&D Beyond</td>
		</tr><tr>
			<td>stats</td>
			<td><a href="{{ site.baseurl }}/object-types#stats">&lt;Stats: Object&gt;</a></td>
			<td></td>
		</tr>
	</table>
</div><br>

<h2><b>NPC#inventory</b></h2>
<div class="embed">
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>shield</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></td>
			<td>Whether or not the NPC has a shield<br>
			If true it will be String with a link to shields on D&D Beyond</td>
		</tr><tr>
			<td>weapon</td>
			<td>&lt;Weapon: Object&gt;</td>
			<td>The weapon that the NPC is carrying</td>
		</tr><tr>
			<td>armor</td>
			<td>&lt;Armor: Object&gt;</td>
			<td>The armor that the NPC is wearing<br>
			May be undefined as not all NPCs will be wearing armor</td>
		</tr><tr>
			<td>tools</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a> of <a href="{{ site.baseurl }}/object-types#tool">&lt;Tool: Object&gt;</a></td>
			<td>The tools that the NPC has<br>
				May be empty as not all NPCs will have tools</td>
		</tr>
	</table>
</div>
