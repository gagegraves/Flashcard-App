import React from "react";
import DeckList from './DeckList';

export default function Dashboard({ decks, updateDecks }) {
  return <DeckList decks={decks} updateDecks={updateDecks} />;
}
