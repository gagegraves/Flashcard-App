import React from "react";
import StudyBtn from "../common-components/buttons/StudyBtn";
import ViewDeckBtn from "../common-components/buttons/ViewDeckBtn";

export default function DeckListItem({ deck, updateDecks }) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-10">
          <h3 className="h3">{deck.deck_name}</h3>
        </div>
        <div className="col">
          <p className="text-muted">{deck.cards_count} cards</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>{deck.deck_desc}</p>
        </div>
      </div>

      <div className="row justify-content-between px-3">
        <div>
          <ViewDeckBtn path={`/decks/${deck.deck_id}`} />
          <StudyBtn path={`decks/${deck.deck_id}`} />
        </div>

        <div>
          {/* <DeleteBtn toDelete={deck} type={"deck"} updateDecks={updateDecks} /> */}
        </div>
      </div>
    </div>
  );
}
