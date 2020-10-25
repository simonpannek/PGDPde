module.exports = coll => {
    return coll.getFilteredByGlob("src/tutors/*.md");
}
