function setBackground(hue, sat) {
    const style = document.documentElement.style;

    style.setProperty("--upper-background-hue", hue);
    style.setProperty("--upper-background-sat", sat + "%");
}

function updateBackground() {
    // Get sin value
    const sin = Math.ceil(Math.sin((new Date().getHours() * 60 + new Date().getMinutes()) / 1440 * Math.PI) * 50);

    // Get hue and saturation for background
    const hue = 240 - sin;
    const sat = 40 + sin;

    // Set hue and saturation from date
    setBackground(hue, sat);
}

// Update background every 5 minutes
setInterval(function () {
    updateBackground();
}, 1000 * 60 * 5);
updateBackground();
