module.exports = (data) => {

	const speed = {
		base: data.base,
		swim: data.swim,
		fly: data.fly,
		climb: data.climb,
		burrow: data.burrow,
	};

	if(data.base){
		speed.swim = (!data.swim) ? Math.round(data.base / 2) : data.swim;
		speed.climb = (!data.climb) ? Math.round(data.base / 2) : data.climb;
	} else { speed.base = 0; };

	return speed;
};
