module.exports = (obj) => {
	let roleType = "invalid";
	if(typeof obj === "string") roleType = obj.toLowerCase();
	if(obj.roleType) roleType = obj.roleType.toString().toLowerCase();
	if(Array.isArray(obj)){
		if(obj[0]) roleType = obj[0].toString().toLowerCase();
	}

	let roleName;
	switch (roleType){
	case "barb":
	case "barbarian":
		roleName = "barbarian";
		break;

	case "entertainer":
	case "musician":
	case "bard":
		roleName = "bard";
		break;

	case "priest":
	case "healer":
	case "cleric":
		roleName = "cleric";
		break;

	case "druid":
		roleName = "druid";
		break;

	case "warrior":
	case "fighter":
		roleName = "fighter";
		break;

	case "monk":
		roleName = "monk";
		break;

	case "paladin":
		roleName = "paladin";
		break;

	case "archer":
	case "ranger":
		roleName = "ranger";
		break;

	case "thief":
	case "theif":
	case "rogue":
		roleName = "rogue";
		break;

	case "mage":
	case "sorc":
	case "sorcerer":
		roleName = "sorcerer";
		break;

	case "warlock":
		roleName = "warlock";
		break;

	case "wiztard":
	case "wizard":
		roleName = "wizard";
		break;

	default: roleName = undefined;
	}
	return roleName;
};
