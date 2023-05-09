import roles from "../roles/roles.json" assert { type: "json" };
import { RaceData, RoleData } from "../../interfaces.js";

export default async function chosenRole(roleType: string, race: RaceData): Promise<RoleData>{
	if(roleType === "random"){
		const n = Math.floor(Math.random() * roles.length);
		roleType = roles[n];
	}
	
	const data = await import(`../roles/${roleType}.js`);
	return data.default(race);
};