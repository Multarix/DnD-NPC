function showHide(element){
	const elem = `${element}${element}`
	let btn = document.getElementById(element);
	let e = document.getElementById(elem);
	if(btn.innerHTML === "Show"){
		e.style.display = "block";
		btn.innerHTML = "Hide";
	}	else {
		e.style.display = "none";
		btn.innerHTML = "Show";
	}
}
