const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;
const header = document.querySelector("header");
const links = document.getElementsByClassName("link");

toggleButton.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    header.classList.toggle("header-dark");
    Array.from(links).forEach(element => {
        if (body.classList.contains("darkmode")) {
            element.style.color = "white";
            element.style.backgroundColor = "black";
        } else {
            element.style.color = "";
            element.style.backgroundColor = "";
        }
    });

    if (body.classList.contains("darkmode")) {
        toggleButton.textContent = "Désactiver le darkmode";
    } else {
        toggleButton.textContent = "Activer le darkmode";
    }
});
