import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { listCards } from "../../utils/api";
import DeleteBtn from "../../common-components/buttons/DeleteBtn";
import StudyBtn from "../../common-components/buttons/StudyBtn";
import LoadingMessage from "../../common-components/LoadingMessage";
import CardList from "./CardList";

export default function DeckView({ deck, setDecks }) {
  const { url } = useRouteMatch(); //current url path
  
  //state variable array of all cards in the current deck
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const abortController = new AbortController();
    async function loadCards() {
       listCards(deck.deck_id, abortController.signal)
      .then(setCards)
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      });
    }
    
    loadCards();
    return () => abortController.abort();
  }, [deck.deck_id]);

  return deck.deck_name && cards ? (
    <>
      <h2 className="h2">{deck.name}</h2>
      <p className="tg-text-light">{deck.description}</p>

      <div className="row justify-content-between mb-5 px-3">
        <div>
          {/* <EditButton path={url} /> */}
          <StudyBtn path={url} />
          {/* <AddCardButton /> */}
        </div>
        <div>
          <DeleteBtn objToDelete={deck} objType="deck" setDecks={setDecks} />
        </div>
      </div>

      <h2 className="h2">Cards</h2>

      <CardList cards={cards} setDecks={setDecks} />
    </>
  ) : (
    <LoadingMessage />
  );
}
