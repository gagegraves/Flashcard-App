import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import Decks from "../decks/Decks";
import { listDecks } from "../utils/api";

export default function Routes() {
  const [decks, setDecks] = useState([]);

  // loads all existent decks upon first render
  useEffect(() => {
    const abortController = new AbortController();

    async function loadDecks() {
      await listDecks(abortController.signal)
        .then(setDecks)
        .catch((error) => {
          if (error.name !== "AbortError") throw error;
        });
    }

    loadDecks();
    return () => abortController.abort();
  }, []);

  console.log(decks);

  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard decks={decks} setDecks={setDecks} />
      </Route>
      <Route path="/decks/">
        <Decks decks={decks} setDecks={setDecks} />
      </Route>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
