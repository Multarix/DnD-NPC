# **[Wildhunt Shifter](https://www.dndbeyond.com/races/shifter#Wildhunt)**
### **Disposition**
\> 100% Neutral
### **Base Movement Speed**
\> 30
### **Race Size**
\> Medium
### **Maximum Age**
\> 61
### **Minimum Age**
\> 10
### **Race Bonus**
```diff
+ 2 Wisdom
+ 1 Dexterity
```

module.exports = () => {
	return {
		name: "Wildhunt Shifter",
		link: "https://www.dndbeyond.com/races/shifter#Wildhunt",
		disposition: ["Neutral"],
		speed: 30,
		size: "Medium",
		maxAge: 61,
		minAge: 10,
		stats: {
			strength: 0,
			dexterity: 1,
			constitution: 0,
			intelligence: 0,
			wisdom: 2,
			charisma: 0,
		},
	};
};
