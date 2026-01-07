const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const existing = document.getElementById("existing");

// Show existing user button if data exists
if (localStorage.getItem("username") && localStorage.getItem("password")) {
	existing.style.display = "block";
}

// Submit handler
submit.addEventListener("click", function (e) {
	e.preventDefault();

	alert(`Logged in as ${username.value}`);

	if (checkbox.checked) {
		localStorage.setItem("username", username.value);
		localStorage.setItem("password", password.value);
		existing.style.display = "block";
	} else {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		existing.style.display = "none";
	}
});

// Existing user login
existing.addEventListener("click", function () {
	alert(`Logged in as ${localStorage.getItem("username")}`);
});
