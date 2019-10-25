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
	const e = document.getElementById(element);
	if(e.style.display === "none"){
		e.style.display = "block";
	} else {
		e.style.display = "none";
	}
}
