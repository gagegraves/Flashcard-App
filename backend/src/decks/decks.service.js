const knex = require("../db/connection");

function read(deck_id) {
  return knex("decks")
    .select("*")
    .where({ deck_id })
    .first();
}

function listDecks() {
  return knex("decks").select("*").returning("*");
}

function deleteDeck(deck_id) {
  return knex("decks").where({ deck_id }).del();
}

module.exports = {
  read,
  listDecks,
  deleteDeck
};
