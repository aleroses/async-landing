const btn = document.querySelector(".dark-mode"); //ver error
const body = document.body;
const light = document.querySelector('link[href="./css/light-mode.css"]');

btn.addEventListener("click", function () {
	if (body.getAttribute("data-theme") == "dark") {
		body.setAttribute("data-theme", "light");
		light.disabled = false;
	} else {
		body.setAttribute("data-theme", "dark");
		light.disabled = true;
	}
});