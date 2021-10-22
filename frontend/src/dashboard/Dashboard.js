import  {useState, useEffect} from "react";
import { listDecks } from "../utils/api";

export default function Dashboard() {

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
      <>
      </>
  )

}