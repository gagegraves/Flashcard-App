const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";


const headers = new Headers();
headers.append("Content-Type", "application/json");

function stripCards(deck) {
  const { cards, ...deckWithoutCards } = deck;
  return deckWithoutCards;
}

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function listDecks(signal) {
  const url = new URL(`${API_BASE_URL}/decks`);
  return await fetchJson(url, { headers, signal, method: "GET" }, [])
}

export async function createDeck(deck, signal) {
  const url =  `${API_BASE_URL}/decks`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(stripCards(deck)),
    signal,
  };
  return await fetchJson(url, options, {});
}

export async function findDeck(deckId, signal) {
  const url = `${API_BASE_URL}/decks/${deckId}`;
  return await fetchJson(url, { signal }, {});
}

export async function updateDeck(updatedDeck, signal) {
  const url = `${API_BASE_URL}/decks/${updatedDeck.id}?_embed=cards`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(stripCards(updatedDeck)),
    signal,
  };
  return await fetchJson(url, options, updatedDeck);
}

export async function deleteDeck(deckId, signal) {
  const url = `${API_BASE_URL}/decks/${deckId}`;
  const options = { method: "DELETE", signal };
  return await fetchJson(url, options);
}


export async function listCards(deckId, signal) {
  const url = `${API_BASE_URL}/cards/${deckId}`;
  return await fetchJson(url, { headers, signal, method: "GET" }, [])
}


export async function createCard(deckId, card, signal) {
  const url = `${API_BASE_URL}/cards`;
  card.deckId = Number(deckId);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(card),
    signal,
  };
  return await fetchJson(url, options, card);
}

export async function readCard(cardId, signal) {
  const url = `${API_BASE_URL}/cards/${cardId}`;
  return await fetchJson(url, { signal }, {});
}

export async function updateCard(updatedCard, signal) {
  const url = `${API_BASE_URL}/cards/${updatedCard.id}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(updatedCard),
  };
  return await fetchJson(url, options, updatedCard);
}

export async function deleteCard(cardId, signal) {
  const url = `${API_BASE_URL}/cards/${cardId}`;
  const options = { method: "DELETE", signal };
  return await fetchJson(url, options);
}
