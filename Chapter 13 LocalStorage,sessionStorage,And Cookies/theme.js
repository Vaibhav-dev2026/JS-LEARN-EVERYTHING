const btn = document.querySelector(".toggle"); // or button id/class

function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
}

function setDarkOrLight() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(osDark ? "dark" : "light");
    }
}

// Toggle button click
btn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    applyTheme(isDark ? "light" : "dark");
});

// OS theme change listener
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
    }
});

// Initial call
setDarkOrLight();


