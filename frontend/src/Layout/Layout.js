import React, {useState, useEffect} from "react";
import Header from "./Header";
import { listDecks } from "../utils/api";

export default function Layout() {
  const [decks, updateDecks] = useState([]);

  // loads all existent decks upon first render
  useEffect(()=>{
    const abortController = new AbortController();

    async function getDecks(){
      await listDecks().then(updateDecks);
      
    }
    getDecks();

    return () => abortController.abort()
  }, []);

  console.log(decks)


  return (
    <div className="container">
      <Header />
    </div>
  );
}

