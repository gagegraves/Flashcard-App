const service = require("./decks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { emptyQuery } = require("pg-protocol/dist/messages");

async function validateDataExists(req, res, next) {
  if (!req.body) {
    return next({ status: 400, message: "Body is empty." });
  }

  next();
}

async function validateDeckId(req, res, next) {
  const { deck_id } = req.params;
  const deck = await service.findDeck(Number(deck_id));
  if (!deck) {
    return next({
      status: 404,
      message: `deck_id ${deck_id} does not exist`,
    });
  }

  res.locals.deck = deck;

  next();
}

async function listDecks(req, res, next) {
  await service
    .listDecks()
    .then((data) => res.json({ data }))
    .catch(next);
}

async function createDeck(req, res, next) {
  const deck = req.body;
  await service
    .createDeck(deck)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}

async function deleteDeck(req, res, next) {
  await service
    .deleteDeck(res.locals.deck.deck_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  listDecks: [asyncErrorBoundary(listDecks)],
  createDeck: [
    asyncErrorBoundary(validateDataExists),
    asyncErrorBoundary(createDeck),
  ],
  deleteDeck: [
    asyncErrorBoundary(validateDeckId),
    asyncErrorBoundary(deleteDeck),
  ],
};
