module.exports = value => {
    const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    const today = require("../src/_data/process").production ? new Date().getDay() - 1 : 0;

    const index = weekdays.findIndex((element) => value.toLowerCase().includes(element));

    return index < 0 ? 7 : (index - today + 7) % 7;
};
