const router = require('express').Router();
const controller = require("./cards.controller");
const methodBlock = require("../errors/methodNotAllowed");

router.route("/:deck_id").get(controller.listCards).all(methodBlock);

module.exports = router;