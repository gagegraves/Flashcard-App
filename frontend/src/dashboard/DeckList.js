import React, { useEffect, useState } from "react";
import DeckListItem from "./DeckListItem";
import CreateDeckBtn from "../common-components/buttons/CreateDeckBtn";
import LoadingMessage from "../common-components/LoadingMessage";

export default function DeckList({ decks, setDecks }) {
  //stores array of DeckList components
  const [deckList, setDeckList] = useState([]);

  //update decklist when decks or updateDecks changes
  useEffect(() => {
    //map through all decks to create a DeckListItem for each
    setDeckList(
      decks.map((deck) => (
        <DeckListItem key={deck.deck_id} deck={deck} setDecks={setDecks} />
      ))
    );
  }, [decks, setDecks]);

  return deckList.length ? (
    <>
      <CreateDeckBtn />
      <div className="list-group">{deckList}</div>
    </>
  ) : (
    <LoadingMessage />
  );
}
