<script>const page = "class";</script>
<h1 class="center title"><b>Character Object</b></h1>
<p class="center">A guide to the object emitted by the generate() method.</p>
<h2><a class="method" href="#Character"><b>Character</b></a></h2>
<pre><code class="language-javascript">{
   character: CharacterData,
   race: RaceData,
   class: ClassData,
   inventory: InventoryData
}
</code></pre>
<p>Relevant links: <a href="#CharacterData">CharacterData</a>, <a href="#RaceData">RaceData</a>, <a href="#ClassData">ClassData</a>, <a href="#InventoryData">InventoryData</a></p>

<h2><a class="method" name="CharacterData" href="#CharacterData"><b>Character Data</b></a></h2>
<pre><code>CharacterData = {
   name: String,
   gender: String,
   alignment: String,
   age: Number,
   background: String,
   level: Number
}
</code></pre>
<p>Relevant links: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></p>

<h2><a class="method" name="RaceData" href="#RaceData"><b>Race Data</b></a></h2>
<pre><code class="language-javascript">RaceData = {
   name: String,
   link: String,
   size: String,
   speed: Number
}
</code></pre>
<p>Relevant links: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></p>

<h2><a class="method" name="ClassData" href="#ClassData"><b>Class Data</b></a></h2>
<pre><code class="language-javascript">ClassData = {
   name: String,
   link: String,
   stats: {
      strength: StatData,
      dexterity: StatData,
      constitution: StatData,
      intelligence: StatData,
      wisdom: StatData,
      charisma: StatData
   }
}
</code></pre>
<p>Relevant links: <a href="#StatData">StatData</a></p>

<h2><a class="method" name="StatData" href="#StatData"><b>Stat Data</b></a></h2>
<pre><code class="language-javascript">StatData = {
   total: Number,
   prof: Number
}
</code></pre>
<p>Relevant links: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></p>

<h2><a class="method" name="InventoryData" href="#InventoryData"><b>Inventory Data</b></a></h2>
<pre><code class="language-javascript">InventoryData = {
   weapon: WeaponData,
   armor: ArmorData,
   shield: Boolean || String,
   tools: ToolData[]
}
</code></pre>
<p>Relevant links: <a href="#WeaponData">WeaponData</a>, <a href="#ArmorData">ArmorData</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>, <a href="#ToolData">ToolData</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></p>
<h2><a class="method" name="WeaponData" href="#WeaponData"><b>Weapon Data</b></a></h2>

<pre><code class="language-javascript">WeaponData = {
   name: String,
   link: String,
   damageType: String,
   damage: String,
   versatileDamage: String || undefined,
   simple: Boolean,
   ranged: Boolean,
   allowsShield: Boolean,
   properties: String[]
}
</code></pre>
<p>Relevant links: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></p>

<h2><a class="method" name="ArmorData" href="#ArmorData"><b>Armor Data</b></a></h2>
<pre><code class="language-javascript">ArmorData = {
   name: String,
   type: String,
   link: String,
   strengthReq: Number,
   isMetal: Boolean,
   isStealthy: Boolean
}
</code></pre>
<p>Relevant links: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></p>

<h2><a class="method" name="ToolData" href="#ToolData"><b>Tool Data</b></a></h2>
<pre><code class="language-javascript">ToolData = {
   name: String,
   link: String
}
</code></pre>
<p>Relevant links: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></p>