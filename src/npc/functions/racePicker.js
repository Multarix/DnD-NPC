module.exports = (obj) => {
	if(!obj) return undefined;
	let raceType = "invalid";
	let subRace = "invalid";

	if(typeof obj[0] === "string") raceType = obj[0].toLowerCase();
	if(typeof obj[1] === "string") subRace = obj[1].toLowerCase();
	obj = obj[0];
	if(obj.raceType) raceType = `${obj.raceType}`.toLowerCase();
	if(obj.subRace) subRace = `${obj.subRace}`.toLowerCase();
	if(Array.isArray(obj)){
		raceType = obj[0];
		subRace = obj[1];
	}

	let raceName;
	switch(raceType){
		case "aarakocra":
			raceName = "aarakocra";
			break;

		case "aasimar":
			switch(subRace){
				case "fallen":
					raceName = "aasimar#fallen";
					break;
				case "protector":
					raceName = "aasimar#protector";
					break;
				case "scourge":
					raceName = "aasimar#scourge";
					break;
				default: raceName = "aasimar";
			}
			break;
		case "fallen":
			raceName = "aasimar#fallen";
			break;
		case "protector":
			raceName = "aasimar#protector";
			break;
		case "scourge":
			raceName = "aasimar#scourge";
			break;

		case "bugbear":
			raceName = "bugbear";
			break;

		case "changeling":
			raceName = "changeling";
			break;

		case "dragonborn":
			raceName = "dragonborn";
			break;

		case "dwarf":
			switch(subRace){
				case "hill":
					raceName = "dwarf#hill";
					break;
				case "mountain":
					raceName = "dwarf#mountain";
					break;
				default: raceName = "dwarf";
			}
			break;
		case "hill":
			raceName = "dwarf#hill";
			break;
		case "mountain":
			raceName = "dwarf#mountain";
			break;

		case "elf":
			switch(subRace){
				case "dark":
					raceName = "elf#dark";
					break;
				case "eladrin":
					raceName = "elf#eladrin";
					break;
				case "high":
					raceName = "elf#high";
					break;
				case "wood":
					raceName = "elf#wood";
					break;
				default: raceName = "elf";
			}
			break;
		case "dark":
			raceName = "elf#dark";
			break;
		case "eladrin":
			raceName = "elf#eladrin";
			break;
		case "high":
			raceName = "elf#high";
			break;
		case "wood":
			raceName = "elf#wood";
			break;

		case "firbolg":
			raceName = "firbolg";
			break;

		case "genasi":
			switch(subRace){
				case "air":
					raceName = "genasi#air";
					break;
				case "earth":
					raceName = "genasi#earth";
					break;
				case "fire":
					raceName = "genasi#fire";
					break;
				case "water":
					raceName = "genasi#water";
					break;
				default: raceName = "genasi";
			}
			break;
		case "air":
			raceName = "genasi#air";
			break;
		case "earth":
			raceName = "genasi#earth";
			break;
		case "fire":
			raceName = "genasi#fire";
			break;
		case "water":
			raceName = "genasi#water";
			break;

		case "gnome":
			switch(subRace){
				case "deep":
					raceName = "gnome#deep";
					break;
				case "forest":
					raceName = "gnome#forest";
					break;
				case "rock":
					raceName = "gnome#rock";
					break;
				default: raceName = "gnome";
			}
			break;
		case "deep":
			raceName = "gnome#deep";
			break;
		case "forest":
			raceName = "gnome#forest";
			break;
		case "rock":
			raceName = "gnome#rock";
			break;

		case "goblin":
			raceName = "goblin";
			break;

		case "goliath":
			raceName = "goliath";
			break;

		case "grung":
			raceName = "grung";
			break;

		case "half-elf":
		case "halfelf":
			raceName = "halfelf";
			break;

		case "halfling":
			switch(subRace){
				case "lightfoot":
					raceName = "halfling#lightfoot";
					break;
				case "stout":
					raceName = "halfling#stout";
					break;
				default: raceName = "halfling";
			}
			break;
		case "lightfoot":
			raceName = "halfling#lightfoot";
			break;
		case "stout":
			raceName = "halfling#stout";
			break;

		case "half-orc":
		case "halforc":
			raceName = "halforc";
			break;

		case "hobgoblin":
			raceName = "hobgoblin";
			break;

		case "human":
			raceName = "human";
			break;

		case "quori":
		case "kalashtar":
			raceName = "kalashtar";
			break;

		case "kenku":
			raceName = "kenku";
			break;

		case "kobold":
			raceName = "kobold";
			break;

		case "lizardfolk":
			raceName = "lizardfolk";
			break;

		case "orc":
			raceName = "orc";
			break;

		case "shifter":
			switch(subRace){
				case "beasthide":
					raceName = "shifter#beasthide";
					break;
				case "longtooth":
					raceName = "shifter#longtooth";
					break;
				case "swiftstride":
					raceName = "shifter#swiftstride";
					break;
				case "wildhunt":
					raceName = "shifter#wildhunt";
					break;
				default: raceName = "shifter";
			}
			break;
		case "beasthide":
			raceName = "shifter#beasthide";
			break;
		case "longtooth":
			raceName = "shifter#longtooth";
			break;
		case "swiftstride":
			raceName = "shifter#swiftstride";
			break;
		case "wildhunt":
			raceName = "shifter#wildhunt";
			break;

		case "tabaxi":
			raceName = "tabaxi";
			break;

		case "tiefling":
			raceName = "tiefling";
			break;

		case "triton":
			raceName = "triton";
			break;

		case "warforged":
			switch(subRace){
				case "envoy":
					raceName = "warforged#envoy";
					break;
				case "juggernaut":
					raceName = "warforged#juggernaut";
					break;
				case "skirmisher":
					raceName = "warforged#skirmisher";
					break;
				default: raceName = "warforged";
			}
			break;
		case "envoy":
			raceName = "warforged#envoy";
			break;
		case "juggernaut":
			raceName = "warforged#juggernaut";
			break;
		case "skirmisher":
			raceName = "warforged#skirmisher";
			break;

		case "yuan-ti":
		case "yuanti":
			raceName = "yuanti";
			break;

		default: raceName = undefined;
	}
	return raceName;
};
