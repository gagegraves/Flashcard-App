const service = require("./cards.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

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

async function listCards(req, res, next) {
  await service
    .listCards(res.locals.deck.deck_id)
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  listCards: [
    asyncErrorBoundary(validateDataExists),
    asyncErrorBoundary(validateDeckId),
    asyncErrorBoundary(listCards),
  ],
};
