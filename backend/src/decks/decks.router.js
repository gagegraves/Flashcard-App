const router = require("express").Router();
const controller = require("./decks.controller");
const methodBlock = require("../errors/methodNotAllowed");

router.route("/:deck_id").get(controller.listCards).delete(controller.deleteDeck).all(methodBlock);

router.route("/").get(controller.listDecks).post(controller.createDeck).all(methodBlock);

module.exports = router;
