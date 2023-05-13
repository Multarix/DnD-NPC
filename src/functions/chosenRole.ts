import { RaceData, RoleData } from "../../interfaces.js";
import fs from "fs";


// Rather than rely on "import assert", just use fs and JSON.parse()
const roleText = fs.readFileSync("./src/roles/roles.json", "utf8")
const roles = JSON.parse(roleText);


export default async function chosenRole(roleType: string, race: RaceData): Promise<RoleData>{
	if(roleType === "random"){
		const n = Math.floor(Math.random() * roles.length);
		roleType = roles[n];
	}
	
	const data = await import(`../roles/${roleType}.js`);
	return data.default(race);
};