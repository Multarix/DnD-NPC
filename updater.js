console.log("Starting Conversion...");

const wait = require("util").promisify(setTimeout);

const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

const init = async () => {
	console.log("Starting init...");

	const blockstates = await readdir("./roleTypes/");
	console.log(`${blockstates.length} files detected in ./roleTypes/`);
	await wait(1000)
	blockstates.forEach(async (f) => {
		try {
			const renameShiz = async () => {
				const renamed = f.replace(".js", ".md");
				await fs.rename(`./roleTypes/${f}`, `./roleTypes/${renamed}`, function (err) {
					if(err) return console.log(err)
				 	return console.log(`Renamed ${f} to ${renamed}`)
			 	});
			 }
			renameShiz();
			} catch (e) {
			console.log(`Failed to rename ${f}`);
		}
	});
};
init();
