// === Load navbar & footer ===
function includeHTML(selector, file) {
	fetch(file)
		.then(res => res.text())
		.then(data => {
			document.querySelector(selector).innerHTML = data;
		});
}

window.addEventListener("DOMContentLoaded", () => {
	includeHTML("header", "../components/navbar.html");
	includeHTML("footer", "../components/footer.html");

	// Delay để đợi navbar được load vào DOM
	setTimeout(() => {
		const toggle = document.getElementById("dark-mode-toggle");
		if (!toggle) return;

		// DARKMODE — dùng html tag thay vì body
		if (localStorage.getItem("darkmode") === "true") {
			document.documentElement.classList.add("darkmode");
			toggle.checked = true;
		}

		toggle.addEventListener("change", () => {
			if (toggle.checked) {
				document.documentElement.classList.add("darkmode");
				localStorage.setItem("darkmode", "true");
			} else {
				document.documentElement.classList.remove("darkmode");
				localStorage.setItem("darkmode", "false");
			}
		});
	}, 200); // Đợi header/footer được load xong
});
