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
};

const textHide = (element) => {
	const e = document.getElementById(element);
	e.style.display = (e.style.display === "block") ? "none" : "block";
}

function topNavMobile() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

function activeNavBar(elementID) {
	if(!elementID) return;
	const e = document.getElementById(elementID);
	e.className = "active";
};
 activeNavBar(page);
