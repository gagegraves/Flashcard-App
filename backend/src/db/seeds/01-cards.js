exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE cards RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("cards").insert([
        { card_front: "card front test 1", card_back: "card back test 1", deck_id: 1 },
        { card_front: "card front test 2", card_back: "card back test 2", deck_id: 1 },
        { card_front: "card front test 3", card_back: "card back test 3", deck_id: 1 },
        { card_front: "card in deck 2 !", card_back: "beep boop", deck_id: 2 }
      ]);
    });
};
