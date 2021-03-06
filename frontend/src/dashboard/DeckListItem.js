import React from "react";
import StudyBtn from "../common-components/buttons/StudyBtn";
import ViewDeckBtn from "../common-components/buttons/ViewDeckBtn";
import DeleteBtn from "../common-components/buttons/DeleteBtn";

export default function DeckListItem({ deck, setDecks }) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-10">
          <h3 className="h3">{deck.deck_name}</h3>
        </div>
        <div className="col">
          {deck.cards_count === 1 ? (
            <p className="text-muted">{deck.cards_count} card</p>
          ) : (
            <p className="text-muted">{deck.cards_count} cards</p>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>{deck.deck_desc}</p>
        </div>
      </div>

      <div className="row justify-content-between px-3">
        <div>
          <ViewDeckBtn path={`decks/${deck.deck_id}`} />
          <StudyBtn path={`decks/${deck.deck_id}`} />
        </div>

        <div>
          <DeleteBtn toDelete={deck} objType={"deck"} setDecks={setDecks} />
        </div>
      </div>
    </div>
  );
}
