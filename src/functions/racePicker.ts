export default function racePicker(raceType: string, subRace = ""): string {

	if(typeof raceType !== "string") throw new TypeError("raceType must be a string");
	raceType = raceType.toLowerCase();

	if(typeof subRace !== "string") throw new TypeError("subRace must be a string");
	subRace = subRace.toLowerCase();

	let raceName: string;
	switch(raceType){
		case "aarakocra":
			raceName = "aarakocra";
			break;

		case "aasimar":
			switch(subRace){
				case "fallen":
					raceName = "aasimar_fallen";
					break;
				case "protector":
					raceName = "aasimar_protector";
					break;
				case "scourge":
					raceName = "aasimar_scourge";
					break;
				default: raceName = "aasimar";
			}
			break;
		case "fallen":
			raceName = "aasimar_fallen";
			break;
		case "protector":
			raceName = "aasimar_protector";
			break;
		case "scourge":
			raceName = "aasimar_scourge";
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
					raceName = "dwarf_hill";
					break;
				case "mountain":
					raceName = "dwarf_mountain";
					break;
				default: raceName = "dwarf";
			}
			break;
		case "hill":
			raceName = "dwarf_hill";
			break;
		case "mountain":
			raceName = "dwarf_mountain";
			break;

		case "elf":
			switch(subRace){
				case "dark":
					raceName = "elf_dark";
					break;
				case "eladrin":
					raceName = "elf_eladrin";
					break;
				case "high":
					raceName = "elf_high";
					break;
				case "wood":
					raceName = "elf_wood";
					break;
				default: raceName = "elf";
			}
			break;
		case "dark":
			raceName = "elf_dark";
			break;
		case "eladrin":
			raceName = "elf_eladrin";
			break;
		case "high":
			raceName = "elf_high";
			break;
		case "wood":
			raceName = "elf_wood";
			break;

		case "firbolg":
			raceName = "firbolg";
			break;

		case "genasi":
			switch(subRace){
				case "air":
					raceName = "genasi_air";
					break;
				case "earth":
					raceName = "genasi_earth";
					break;
				case "fire":
					raceName = "genasi_fire";
					break;
				case "water":
					raceName = "genasi_water";
					break;
				default: raceName = "genasi";
			}
			break;
		case "air":
			raceName = "genasi_air";
			break;
		case "earth":
			raceName = "genasi_earth";
			break;
		case "fire":
			raceName = "genasi_fire";
			break;
		case "water":
			raceName = "genasi_water";
			break;

		case "gnome":
			switch(subRace){
				case "deep":
					raceName = "gnome_deep";
					break;
				case "forest":
					raceName = "gnome_forest";
					break;
				case "rock":
					raceName = "gnome_rock";
					break;
				default: raceName = "gnome";
			}
			break;
		case "deep":
			raceName = "gnome_deep";
			break;
		case "forest":
			raceName = "gnome_forest";
			break;
		case "rock":
			raceName = "gnome_rock";
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
					raceName = "halfling_lightfoot";
					break;
				case "stout":
					raceName = "halfling_stout";
					break;
				default: raceName = "halfling";
			}
			break;
		case "lightfoot":
			raceName = "halfling_lightfoot";
			break;
		case "stout":
			raceName = "halfling_stout";
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
					raceName = "shifter_beasthide";
					break;
				case "longtooth":
					raceName = "shifter_longtooth";
					break;
				case "swiftstride":
					raceName = "shifter_swiftstride";
					break;
				case "wildhunt":
					raceName = "shifter_wildhunt";
					break;
				default: raceName = "shifter";
			}
			break;
		case "beasthide":
			raceName = "shifter_beasthide";
			break;
		case "longtooth":
			raceName = "shifter_longtooth";
			break;
		case "swiftstride":
			raceName = "shifter_swiftstride";
			break;
		case "wildhunt":
			raceName = "shifter_wildhunt";
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
					raceName = "warforged_envoy";
					break;
				case "juggernaut":
					raceName = "warforged_juggernaut";
					break;
				case "skirmisher":
					raceName = "warforged_skirmisher";
					break;
				default: raceName = "warforged";
			}
			break;
		case "envoy":
			raceName = "warforged_envoy";
			break;
		case "juggernaut":
			raceName = "warforged_juggernaut";
			break;
		case "skirmisher":
			raceName = "warforged_skirmisher";
			break;

		case "yuan-ti":
		case "yuanti":
			raceName = "yuanti";
			break;

		default: raceName = "random";
	}
	return raceName;
}
