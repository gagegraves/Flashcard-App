exports.up = function (knex) {
  return knex.schema.createTable("decks", (table) => {
    table.increments("deck_id").primary().notNullable();
    table.string("deck_name").notNullable();
    table.text("deck_desc").notNullable();
    table.integer("cards_count").defaultTo(0).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("decks");
};
