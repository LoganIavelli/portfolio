// AI Disclosure: ScrollReveal was installed using GitHub Copilot and assisted in making the dark mode button function.

const themeButton = document.querySelector("#theme-toggle");
const themeImages = document.querySelectorAll("[data-light][data-dark]");

function setTheme(theme) {
    const isDark = theme === "dark";

    document.documentElement.dataset.theme = theme;

    themeImages.forEach((image) => {
        image.src = isDark ? image.dataset.dark : image.dataset.light;
    });

    themeButton.textContent = isDark ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-pressed", isDark);
}

themeButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
});

setTheme("light");

const scrollReveal = ScrollReveal({
    distance: "40px",
    duration: 800,
    easing: "ease-out",
    origin: "bottom",
    reset: false
});

scrollReveal.reveal("section", {
    interval: 150
});

scrollReveal.reveal(".card", {
    interval: 150,
    scale: 0.95
});