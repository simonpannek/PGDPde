module.exports = coll => {
    return coll.getAll().sort((o1, o2) => (o1.url >= o2.url ? 1 : -1));
}
