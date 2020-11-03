// Dark theme activated
const darkTheme = function (dark) {
    if (typeof dark === "boolean") localStorage.setItem("darkTheme", dark);
    return localStorage.getItem("darkTheme") ? localStorage.getItem("darkTheme") === "true" :
        window.matchMedia('(prefers-color-scheme: dark)').matches;
};

function setTheme(dark = darkTheme()) {
    darkTheme(dark);

    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
}

function toggleTheme() {
    setTheme(!darkTheme());
}

setTheme();
