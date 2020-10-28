function setBackground(hue, sat, shadowHue, shadowStrength) {
    const style = document.documentElement.style;

    style.setProperty("--upper-background-hue", hue);
    style.setProperty("--upper-background-sat", sat + "%");
    style.setProperty("--shadow-hue", shadowHue);
    style.setProperty("--shadow-strength", shadowStrength);
}

function updateBackground() {
    // Get hue and saturation for background
    const hue = 240 - getSin();
    const sat = 40 + getSin();

    // Get hue and strength for shadow
    const shadowHue = getSin(40);
    const shadowStrength = getSin(0.5, true, 4, 5);

    // Set hue and saturation from date
    setBackground(hue, sat, shadowHue, shadowStrength);
}

function getSin(range = 50, fixed = false, frequency = 1, shift = 0) {
    const now = new Date();
    const sin = Math.sin(((now.getHours() - shift) * 60 + now.getMinutes()) / 1440 * frequency * Math.PI) * range;
    return fixed ? sin.toFixed(3) : Math.ceil(sin);
}

// Update background every 5 minutes
setInterval(function () {
    updateBackground();
}, 1000 * 60 * 5);
updateBackground();
