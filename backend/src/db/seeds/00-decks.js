exports.seed = function(knex) {
	return knex
		.raw("TRUNCATE TABLE decks RESTART IDENTITY CASCADE")
    	.then(function () {
			return knex('decks').insert([
				{ deck_name: "deck name test", deck_desc: "test deck desc", cards_count: 3 },
				{ deck_name: "test deck #2", deck_desc: "test deck #2", cards_count: 1 },
			]);
    	});
};