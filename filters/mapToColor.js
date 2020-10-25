module.exports = value => {
    const gradients = ["blue", "green", "yellow", "red", "purple"];

    return gradients[value % gradients.length];
};
