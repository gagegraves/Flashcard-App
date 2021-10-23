import React from "react";
import FormTemplate from "../common-components/forms/FormTemplate";

export default function NewDeck({ decks, setDecks }) {
  return (
    <>
      <FormTemplate
        objType="Deck"
        modifyType="Create"
        decks={decks}
        setDecks={setDecks}
      />
    </>
  );
}
