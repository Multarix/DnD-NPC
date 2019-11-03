
```js
{
  "character": {
    // The name of the NPC
    "name": String,
    // The gender of the NPC
    "gender": String,
    // The alignment of the NPC
    "alignment": String,
    // The age of the NPC
    "age": Number,
     // The type of background that this NPC has
    "background": String,
    // The level of the NPC. This should always be level 1
    "level": Number
  },
  "race": {
    // The name of the race
    "name": String,
    // Link to the race on D&D Beyond
    "link": String,
    // The size of the race Small, Medium etc.
    "size": String,
    // The base movement speed of the race
    "speed": Number
  },
  "role": {
    // The name of the role
    "name": String,
    // link to the class on D&D Beyond
    "link": String,
    "stats": {
      // The total strength of the NPC including the race bonus
      "strength": Number,
      // The total dexterity of the NPC including the race bonus
      "dexterity": Number,
      // The total constitution of the NPC including the race bonus
      "constitution": Number,
      // The total intelligence of the NPC including the race bonus
      "intelligence": Number,
      // The total wisdom of the NPC including the race bonus
      "wisdom": Number,
      // The total charisma of the NPC including the race bonus
      "charisma": Number
    },
  },
  "inventory": {
    // The weapon that the NPC is carrying.
    "weapon": {
      // The name of the weapon
      "name": String,
      // The link to the weapon on D&D Beyond
      "link": String,
      // The type of damage the weapon does.
      "damageType": String,
      // The damage done by the weapon.
      "damageAmount": String,
      // Damage done if the weapon is "versatile".
      "vDamage": String,
      // Whether this weapon is classified as martial or simple
      "simple": Boolean,
      // Whether or not the weapon is a ranged weapon
      "ranged": Boolean,
      // Whether or not the weapon allows the use of a shield
      "allowShield": Boolean,
      // The properties of the weapon. May be Empty.
      "properties": Array
    },
    // Whether or not the NPC has a shield
    // If true it will be String with a link to shields on D&D Beyond
    "shield": Boolean,
    // The armor that the NPC is wearing, this may be undefined.
    "armor": {
      // The name of the armor
      "name": String,
      // The armor type. Light, Medium or Heavy
      "type": String,
      // Link to the armor on D&D Beyond
      "link": String,
      // The strength requirement for the armor
      "strength": Number,
      // Whether or not the armor is made of metal
      "metal": Boolean,
      // Whether or not the armor impedes the stealth of the NPC
      "stealth": Boolean
    },
    // The tools that the NPC has. This may be empty.
    "tools": [
      {
        // Name of the tool
        "name": String,
        // Link to the tool on D&D Beyond
        "link": String
      }
    ]
  }
};
```
