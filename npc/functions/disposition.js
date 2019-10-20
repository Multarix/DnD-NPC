module.exports = (raceDisp, roleDisp) => {
	let n = Math.floor(Math.random() * roleDisp.length);
	const lnc = roleDisp[n];
	n = Math.floor(Math.random() * raceDisp.length);
	const gne = raceDisp[n];

	const alignment = (gne === lnc) ? "True Neutral" : `${lnc} ${gne}`;
	return alignment;
};
