const service = require("./decks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function validateDeckId(req, res, next) {
  const { deck_id } = req.params;
  const deck = await service.read(Number(deck_id));
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

async function deleteDeck(req, res, next) {
  await service
    .deleteDeck(res.locals.deck.deck_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  listDecks: [asyncErrorBoundary(listDecks)],
  deleteDeck: [
    asyncErrorBoundary(validateDeckId),
    asyncErrorBoundary(deleteDeck),
  ],
};
