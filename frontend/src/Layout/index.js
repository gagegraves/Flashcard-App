import React, {useState, useEffect} from "react";
// api calls for data
import Header from "./Header";
import { listDecks} from "../utils/api";

function Layout() {
  const [decks, updateDecks] = useState([]);

  // loads all existent decks upon first render
  useEffect(()=>{
    async function getDecks(){
      const response = await listDecks();

      updateDecks([...response]);
    }
    getDecks();

  }, []);


  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default Layout;
