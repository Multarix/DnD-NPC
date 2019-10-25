# **[Protector Aasimar](https://www.dndbeyond.com/races/aasimar#ProtectorAasimar)**
### **Disposition**
\> 100% Good
### **Base Movement Speed**
\> 30
### **Race Size**
\> Medium
### **Maximum Age**
\> 144
### **Minimum Age**
\> 18
### **Race Bonus**
```diff
+ 2 Charisma
+ 1 Wisdom
```
module.exports = () => {
	return {
		name: "Protector Aasimar",
		link: "https://www.dndbeyond.com/races/aasimar#ProtectorAasimar",
		disposition: ["Good"],
		speed: 30,
		size: "Medium",
		maxAge: 144,
		minAge: 18,
		stats: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 1,
			charisma: 2,
		},
	};
};
