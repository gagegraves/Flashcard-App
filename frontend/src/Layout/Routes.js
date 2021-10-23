import React, {useState, useEffect} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";

export default function Routes() {

  const [decks, updateDecks] = useState([]);


       // loads all existent decks upon first render
       useEffect(() => {
        const abortController = new AbortController();
    
        async function getDecks() {
          await listDecks().then(updateDecks);
        }
        getDecks();
    
        return () => abortController.abort();
      }, []);
    
      console.log(decks);

  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard decks={decks} setDecks={updateDecks}/>
      </Route>
      <Route path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
