
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
		//DARKMODE
		// Load trạng thái lưu trong localStorage
		if (localStorage.getItem("darkmode") === "true") {
			document.body.classList.add("darkmode");
			toggle.checked = true;
		}

		// Khi người dùng bấm bật/tắt
		toggle.addEventListener("change", () => {
			if (toggle.checked) {
				document.body.classList.add("darkmode");
				localStorage.setItem("darkmode", "true");
			} else {
				document.body.classList.remove("darkmode");
				localStorage.setItem("darkmode", "false");
			}
		});
	}, 200); // đợi 200ms để header/footer kịp load
});

