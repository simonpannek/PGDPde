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

updatePins().forEach(id => document.getElementById(id).classList.toggle("pinned", true));

// Event listeners
document.getElementById("penguin").onclick = () => toggleTheme();

for (let pin of document.getElementsByClassName("pin")) {
    pin.onclick = event => {
        // Get container
        let target = event.target;
        while (!target.id) target = target.parentNode;

        // Toggle pinned state
        target.classList.toggle("pinned", updatePins(target.id).includes(target.id));
    };
}
