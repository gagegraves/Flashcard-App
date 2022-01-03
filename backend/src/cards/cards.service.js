const knex = require("../db/connection");

function listCards(deck_id) {
  return knex("cards").where("deck_id", deck_id).returning("*");
}

module.exports = {
    listCards,
};
