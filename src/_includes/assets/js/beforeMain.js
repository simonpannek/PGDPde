function setBackground(hue, sat, shadowHue, shadowStrength) {
    const style = document.documentElement.style;

    style.setProperty("--upper-background-hue", hue);
    style.setProperty("--upper-background-sat", sat + "%");
}

function updateBackground() {
    // Get hue and saturation for background
    const hue = 240 - getSin();
    const sat = 40 + getSin();

    // Set hue and saturation from date
    setBackground(hue, sat);
}

function getSin() {
    const now = new Date();
    const sin = Math.sin((now.getHours() * 60 + now.getMinutes()) / 1440 * Math.PI) * 50;
    return Math.ceil(sin);
}

// Update background every 5 minutes
setInterval(function () {
    updateBackground();
}, 1000 * 60 * 5);
updateBackground();
