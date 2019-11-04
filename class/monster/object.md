<script>const page = "class";</script>
<h1 class="center title"><b>NPC Object</b></h1>
<p class="center">A list of all the properties relating to the NPC</p>
<br>

<h2><b>Monster#name</b></h2>
<div class="embed">
	<p>The name of the monster<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>
</div><br>

<h2><b>Monster#link</b></h2>
<div class="embed">
	<p>The link to the monster on D&D Beyond<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>
</div><br>

<h2><b>Monster#size</b></h2>
<div class="embed">
	<p>The size rating of the monster.</p>
		<h4><b>Possible Sizes</b></h4>
		<ul>
			<li>Tiny</li>
			<li>Small</li>
			<li>Medium</li>
			<li>Large</li>
			<li>Huge</li>
			<li>Gargantuan</li>
		</ul><br>
	<p><b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>
</div><br>

<h2><b>Monster#type</b></h2>
<div class="embed">
	<p>The type of monster<br>
		<h4><b>Possible Types</b></h4>
		<div class="embedRow">
			<div class="embedLeft">
				<ul>
					<li>Abberation</li>
					<li>Beast</li>
					<li>Celestial</li>
					<li>Construct</li>
					<li>Dragon</li>
					<li>Elemental</li>
					<li>Fey</li>
				</ul>
			</div>
			<div class="embedRight">
				<ul>
					<li>Fiend</li>
					<li>Giant</li>
					<li>Humanoid</li>
					<li>Monstrosity</li>
					<li>Ooze</li>
					<li>Plant</li>
					<li>Undead</li>
				</ul><br>
			</div>
		</div>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>
</div><br>

<h2><b>Monster#alignment</b></h2>
<div class="embed">
	<p>The alignment of the NPC<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>
</div><br>

<h2><b>Monster#armor</b></h2>
<div class="embed">
	<p>The armor class (AC) of the monster<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></p>
</div><br>

<h2><b>Monster#hp</b></h2>
<div class="embed">
	<p>An object containing the average hp and hp formula of the monster</p>
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>average</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The average HP based on the formula</td>
		</tr><tr>
			<td>formula</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The formula to determine the HP of the monster</td>
		</tr>
	</table>
	<p><b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a></p>
</div><br>

<h2><b>Monster#speed</b></h2>
<div class="embed">
	<p>An object containing the movement speeds of the monster</p>
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>base</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The base movement speed of the monster.<br><i>May be null</i></td>
		</tr><tr>
			<td>swim</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The swim speed of the monster.<br><i>May be null</i></td>
		</tr><tr>
			<td>fly</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The flying speed of the monster.<br><i>May be null</i></td>
		</tr><tr>
			<td>climb</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The climbing speed of the monster.<br><i>May be null</i></td>
		</tr><tr>
			<td>burrow</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The burrowing speed of the monster.<br><i>May be null</i></td>
		</tr>
	</table>
	<p><b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a></p>
</div><br>

<h2><b>Monster#stats</b></h2>
<div class="embed">
	<p>The stats of the monster<br>
	<b>TypeOf:</b> <a href="{{ site.baseurl }}/object-types.html#stats">&lt;Stats: Object&gt;</a></p>
</div><br>

<h2><b>Monster#saves</b></h2>
<div class="embed">
	<p>An array of strings that contain the stats that the monster has saving throws advantages on<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></p>
</div><br>

<h2><b>Monster#challenge</b></h2>
<div class="embed">
	<p>The challenge rating of the monster<br>
	<b>TypeOf:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></p>
</div><br>
