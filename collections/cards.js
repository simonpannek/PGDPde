const getOrder = require("../modules/getOrder")

module.exports = coll => {
    return coll.getFilteredByGlob("src/tutors/*.md")
        .sort((o1, o2) => getOrder(o1.data.session) - getOrder(o2.data.session));
}
