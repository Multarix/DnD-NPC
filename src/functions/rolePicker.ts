export default function rolePicker(roleType: string){
	
	if(typeof roleType !== "string") throw new TypeError("roleType must be a string");
	roleType = roleType.toLowerCase();

	let roleName: string;
	switch(roleType){
		case "artificer":
			roleName = "artificer";
			break;

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

		default: roleName = "random";
	}
	return roleName;
};
