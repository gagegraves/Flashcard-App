import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard, deleteDeck, listDecks } from "../../utils/api";

export default function DeleteBtn({ toDelete, objType, setDecks }) {
  const history = useHistory();

  function handleDelete() {
    if (window.confirm(`Delete ${objType}? This cannot be undone.`)) {
      const abortCcontroller = new AbortController();

      //check what we are deleting
      async function deleteObj() {
        objType === "deck"
          ? deleteDeck(toDelete)
              .then(() => updateDecks(abortCcontroller))
              .then(() => history.push(""))
          : deleteCard(toDelete).then(() => updateDecks(abortCcontroller));
      }
      deleteObj();
      return () => abortCcontroller.abort(); //clenaup
    }
  }

  function updateDecks({ signal }) {
    listDecks(signal)
      .then(setDecks)
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      });
  }

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      <span
        className="oi oi-trash pr-1"
        title="trash"
        aria-hidden="true"
      ></span>
      Delete
    </button>
  );
}
