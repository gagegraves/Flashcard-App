import React, { useEffect, useState } from "react";
import DeckListItem from "./DeckListItem";
import CreateDeckBtn from "../common-components/buttons/CreateDeckBtn";
import LoadingMessage from "../common-components/LoadingMessage";

export default function DeckList({ decks, updateDecks }) {
  //stores array of DeckList components
  const [deckList, setDeckList] = useState([]);

  //update decklist when decks or updateDecks changes
  useEffect(() => {
    //map through all decks to create a DeckListItem for each
    setDeckList(
      decks.map((deck) => (
        <DeckListItem deck={deck} updateDecks={updateDecks} />
      ))
    );
  }, [decks, updateDecks]);

  return deckList.length ? (
    <>
      <CreateDeckBtn />
      <div className="list-group">{deckList}</div>
    </>
  ) : (
    <LoadingMessage />
  );
}
