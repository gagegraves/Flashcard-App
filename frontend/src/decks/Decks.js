import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NewDeck from "./NewDeck";
import Deck from "./deck/Deck"
import NotFound from "../layout/NotFound";

export default function Decks({ decks, setDecks }) {
  const { url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${url}/new`}>
          <NewDeck decks={decks} setDecks={setDecks} />
        </Route>
        <Route path={`${url}/:deckId`}>
          <Deck decks={decks} setDecks={setDecks} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
