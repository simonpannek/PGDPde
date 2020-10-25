module.exports = value => {
    return value.startsWith("http") ? value : "/assets/img/" + value;
};
