const knex = require("../db/connection");

function listDecks() {
  return knex("decks").select("*").returning("*");
}

module.exports = {
  listDecks,
};
