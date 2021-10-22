exports.up = function (knex) {
  return knex.schema.createTable("cards", (table) => {
    table.increments("card_id").primary().notNullable();
    table.string("card_front").notNullable();
    table.text("card_back").notNullable();
    table.integer("deck_id").unsigned();
    table
      .foreign("deck_id")
      .references("deck_id")
      .inTable("decks")
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cards");
};
