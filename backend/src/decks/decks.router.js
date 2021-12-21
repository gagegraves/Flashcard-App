const router = require("express").Router();
const controller = require("./decks.controller");
const methodBlock = require("../errors/methodNotAllowed");

router.route("/:deck_id/cards").get(controller.listCards).all(methodBlock);

router.route("/:deck_id").delete(controller.deleteDeck).all(methodBlock);

router.route("/").get(controller.listDecks).post(controller.createDeck).all(methodBlock);

module.exports = router;
