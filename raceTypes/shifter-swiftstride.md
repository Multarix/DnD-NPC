# **[Swiftstride Shifter](https://www.dndbeyond.com/races/shifter#Swiftstride)**
### **Disposition**
\> 100% Neutral
### **Base Movement Speed**
\> 35
### **Race Size**
\> Medium
### **Maximum Age**
\> 61
### **Minimum Age**
\> 10
### **Race Bonus**
```diff
+ 2 Dexterity
+ 1 Charisma
```

module.exports = () => {
	return {
		name: "Swiftstride Shifter",
		link: "https://www.dndbeyond.com/races/shifter#Swiftstride",
		disposition: ["Neutral"],
		speed: 35,
		size: "Medium",
		maxAge: 61,
		minAge: 10,
		stats: {
			strength: 0,
			dexterity: 2,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 1,
		},
	};
};