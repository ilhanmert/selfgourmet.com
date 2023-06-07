const database = require("../database/config");

module.exports = {
    findAll,
}

function findAll() {
    return database("platforms");
}