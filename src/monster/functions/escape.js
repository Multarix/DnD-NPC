module.exports = (name) => {
	let escaped = name.replace(/%/g, "\\%").toLowerCase();
	return `%${escaped}%`;
}
