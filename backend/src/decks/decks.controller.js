const service = require("./decks.service");

async function listDecks(req, res, next) {
  const data = await service
    .listDecks()
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  listDecks,
};
