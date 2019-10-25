const showHide = (button, element) => {
	let btn = document.getElementById(button);
	let e = document.getElementById(element);
	if(btn.innerHTML === "Show"){
		e.style.display = "block";
		btn.innerHTML = "Hide";
	}	else {
		e.style.display = "none";
		btn.innerHTML = "Show";
	}
}

const textHide = (element) => {
	e = document.getElementById(element);
	e.style.display = (e.style.display = "none";) ? "block" : "none";
}
