const toggleButton = document.getElementById("darkModeToggle");
// Load saved mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "*";
}
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if
        (document.body.classList.contains("dark-mode")) {

        toggleButton.textContent = "dark-mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleButton.textContent = "light-mode";
        localStorage.setItem("theme", "light");
    }
});
