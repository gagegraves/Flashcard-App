const knex = require("../db/connection");

function findDeck(deck_id) {
    return knex("decks").select("*").where({ deck_id }).first();
  }

function getCards(deck_id) {
  return knex("cards").where("deck_id", deck_id).returning("*");
}

module.exports = {
    findDeck,
    getCards,
};
