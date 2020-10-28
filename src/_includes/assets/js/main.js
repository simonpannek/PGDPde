// Access and save pins
const updatePins = function (id) {
    // Get pins
    const pins = localStorage.getItem("pins") ? JSON.parse(localStorage.getItem("pins")) : [];

    // Check if a pin has to be added/removed
    if (typeof id === "string") {
        const index = pins.indexOf(id);
        if (index < 0) {
            // Add pin
            pins.push(id);
        } else {
            // Remove pin
            pins.splice(index, 1);
        }
        // Update pins
        localStorage.setItem("pins", JSON.stringify(pins));
    }
    return pins;
};

updatePins().forEach(id => {
    const element = document.getElementById(id);
    element.style.order = "0";
    element.classList.toggle("pinned", true);
});

// Event listeners
document.getElementById("penguin").onclick = () => toggleTheme();

const pins = document.getElementsByClassName("pin");
for (let pin of pins) {
    pin.onclick = event => {
        let target = event.target;
        while (!target.id) target = target.parentNode;
        const pinned =  updatePins(target.id).includes(target.id);
        target.style.order = pinned ? "0" : "1";
        target.classList.toggle("pinned", pinned);
    };
}
