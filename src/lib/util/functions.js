module.exports = {
    searchQuery: (query, toSearch) => {
        return new RegExp(`.*${query.split(" ").join(".*")}.*`, "gi").test(toSearch);
    }
};