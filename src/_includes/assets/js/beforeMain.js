function setBackground(hue, sat) {
    const style = document.documentElement.style;
    style.setProperty("--background-hue", hue);
    style.setProperty("--background-sat", sat + "%");
}

function updateBackground(hour = new Date().getHours(), minutes = new Date().getMinutes()) {
    const hue = Math.floor(((hour - 6) * 60 + minutes) / 4) % 360;
    const sat = 40 + Math.ceil(Math.sin((hour * 60 + minutes) / 1440 * Math.PI) * 60);

    // Set hue and saturation from date
    setBackground(hue, sat);
}

// Update background every 4 minutes
setInterval(function () {
    updateBackground();
}, 1000 * 60 * 4);
updateBackground();
