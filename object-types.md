<script>const page = "home";</script>
<h1 class="center title"><b>Object Types</b></h1>
<p class="center">A list of the Object Types you may come across</p>
<br>

<h2><a class="method" name="weapon" href="#weapon"><b>Weapon Object</b></a></h2>
<div class="embed">
	<p>A weapon object describes a particular weapon</p>
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>name</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The name of the weapon</td>
		</tr><tr>
			<td>link</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The link to the weapon on D&D Beyond</td>
		</tr><tr>
			<td>damageType</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The type of damage the weapon does</td>
		</tr><tr>
			<td>damageAmount</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The damage done by the weapon</td>
		</tr><tr>
			<td>vDamage</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>Damage done if the weapon has the "versatile" property and is being used two-handed. Otherwise undefined</td>
		</tr><tr>
			<td>simple</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></td>
			<td>Whether this weapon is classified as martial or simple</td>
		</tr><tr>
			<td>ranged</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></td>
			<td>Whether or not the weapon is a ranged weapon</td>
		</tr><tr>
			<td>allowShield</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></td>
			<td>Whether or not the weapon allows the use of a shield</td>
		</tr><tr>
			<td>properties</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></td>
			<td>An array of strings, each string is a single property of the weapon. May be Empty</td>
		</tr>
	</table>
</div><br>

<h2><a class="method" name="armor" href="#armor"><b>Armor Object</b></a></h2>
<div class="embed">
	<p>An armor object describes a type of armor</p>
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>name</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The name of the armor</td>
		</tr><tr>
			<td>link</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>Link to the armor on D&D Beyond</td>
		</tr><tr>
			<td>type</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>The armor type. Light, Medium or Heavy</td>
		</tr><tr>
			<td>strength</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
			<td>The strength requirement to equip the armor</td>
		</tr><tr>
			<td>metal</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></td>
			<td>Whether or not the armor is made of metal</td>
		</tr><tr>
			<td>stealth</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></td>
			<td>Whether or not the armor impedes the stealth of the NPC</td>
		</tr>
	</table>
</div><br>

<h2><a class="method" name="stats" href="#stats"><b>Stats Object</b></a></h2>
	<div class="embed">
		<p>A stats object provides information about the Strength, Dexterity, Constitution, Intelligence, Wisdom & Charisma for an NPC or Monster</p>
		<table>
			<tr>
				<th>Property</th>
				<th>Type</th>
				<th>Description</th>
			</tr><tr>
				<td>strength</td>
				<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
				<td>The total strength</td>
			</tr><tr>
				<td>dexterity</td>
				<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
				<td>The total dexterity</td>
			</tr><tr>
				<td>constitution</td>
				<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
				<td>The total constitution</td>
			</tr><tr>
				<td>intelligence</td>
				<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
				<td>The total intelligence</td>
			</tr><tr>
				<td>wisdom</td>
				<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
				<td>The total wisdom</td>
			</tr><tr>
				<td>charisma</td>
				<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></td>
				<td>The total charisma</td>
			</tr>
		</table>
	</div><br>

<h2><a class="method" name="tool" href="#tool"><b>Tool Object</b></a></h2>
<div class="embed">
	<p>A tool object describes a particular tool or instrument</p>
	<table>
		<tr>
			<th>Property</th>
			<th>Type</th>
			<th>Description</th>
		</tr><tr>
			<td>name</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>Name of the tool/ instrument</td>
		</tr><tr>
			<td>Link</td>
			<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></td>
			<td>Link to the tool/ instrument on D&D Beyond</td>
		</tr>
	</table>
</div>
