const knex = require("../db/connection");

function findDeck(deck_id) {
  return knex("decks").select("*").where({ deck_id }).first();
}

function listDecks() {
  return knex("decks").select("*").returning("*");
}

function createDeck(deck) {
  return knex("decks")
    .insert(deck)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function deleteDeck(deck_id) {
  return knex("decks").where({ deck_id }).del();
}

function listCards(deck_id) {
  return knex("cards").select("*").where({ deck_id });
}
module.exports = {
  findDeck,
  listDecks,
  createDeck,
  deleteDeck,
  listCards,
};
