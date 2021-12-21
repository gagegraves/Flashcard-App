import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DeckView from "./DeckView";
import NotFound from "../../layout/NotFound";
import { findDeck } from "../../utils/api";

export default function Deck({ decks, setDecks }) {
  const {
    path,
    params: { deck_id },
  } = useRouteMatch();

  const [deck, setDeck] = useState({});

  //automatically loads current deck from API upon render
  useEffect(() => {
    const abortController = new AbortController();

    async function loadDeck() {
      findDeck(deck_id, abortController.signal)
        .then(setDeck)
        .catch((error) => {
          if (error.name !== "AbortError") throw error;
        });
    }

    loadDeck();
    return () => abortController.abort(); //cleanup
  }, [deck_id, decks]);

  return (
    <>
      <Switch>
        <Route path={path}>
          <DeckView deck={deck} setDecks={setDecks} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
