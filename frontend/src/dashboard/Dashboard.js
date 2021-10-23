import React from "react";
import DeckList from './DeckList';

export default function Dashboard({ decks, setDecks }) {
  return <DeckList decks={decks} setDecks={setDecks} />;
}
