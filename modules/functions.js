var navbar = document.getElementById("topNavbar");
var sticky = navbar.offsetTop;
function navBarTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function() {navBarTop()};

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
