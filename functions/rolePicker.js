module.exports = (obj) => {
	let role = "invalid";
	if(typeof obj === "string") role = obj.toLowerCase();
	if(obj.role) role = obj.role.toString().toLowerCase();
	if(Array.isArray(obj)){
		if(obj[0]) role = obj[0].toString().toLowerCase();
	}

	let roleName;
	switch (role){
	case "barbarian" || "barb":
		roleName = "barbarian";
		break;
	case "bard" || "musician" || "entertainer":
		roleName = "bard";
		break;
	case "cleric" || "healer" || "priest":
		roleName = "cleric";
		break;
	case "druid":
		roleName = "druid";
		break;
	case "fighter" || "warrior":
		roleName = "fighter";
		break;
	case "monk":
		roleName = "monk";
		break;
	case "paladin":
		roleName = "paladin";
		break;
	case "ranger" || "archer":
		roleName = "ranger";
		break;
	case "rogue" || "thief":
		roleName = "rogue";
		break;
	case "sorcerer" || "sorc" || "mage":
		roleName = "sorcerer";
		break;
	case "warlock":
		roleName = "warlock";
		break;
	case "wizard" || "wiztard":
		roleName = "wizard";
		break;
	default: roleName = undefined;
	}
	return roleName;
};
