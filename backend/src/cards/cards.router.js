const router = require('express').Router();
const controller = require("./cards.controller");
const methodBlock = require("../errors/methodNotAllowed");

router.route("/:deck_id").get(controller.getCards).all(methodBlock);

module.exports = router;