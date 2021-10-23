import React, { useState } from "react";
import { useHistory } from "react-router";
import { createDeck, listDecks } from "../../utils/api";
import FormField from "./FormField"

export default function FormTemplate({ objType, modifyType, decks, setDecks }) {
  const history = useHistory();
  const initialFormState = {
    deck_name: "",
    deck_desc: "",
  };
  const firstPlaceholder = objType === "Deck" ? "Deck Name" : "Front side";
  const secondPlaceholder = objType === "Deck" ? "Deck Description" : "Back side";
  const [formData, setFormData] = useState(initialFormState);

  function cancelHandler() {
    setFormData(initialFormState);
    history.push("");
  }

  function formChangeHandler({ target }) {
      setFormData({
          ...formData,
          [target.name]: target.value,
        });
        console.log(formData)
  }

  function createDeckSubmitHandler(event) {
    event.preventDefault();
    const abortCcontroller = new AbortController();
    createDeck(formData, abortCcontroller.signal).then(
      updateDecks(abortCcontroller.signal)
    );
  }

  function updateDecks(signal) {
    listDecks(signal)
      .then(setDecks)
      .then(() => history.push("/"))
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      });
  }

  return (
    <>
      <h1 className="h1">
        {modifyType} {objType}
      </h1>
      <form onSubmit={createDeckSubmitHandler}>
        <FormField
          inputType={objType === "Deck" ? "text" : "textarea"}
          name={objType === "Deck" ? "deck_name" : "card_front"}
          placeholder={firstPlaceholder}
          value={formData.deck_name}
          formChangeHandler={formChangeHandler}
        />
        <FormField
          inputType="textarea"
          name={objType === "Deck" ? "deck_desc" : "card_back"}
          placeholder={secondPlaceholder}
          value={formData.deck_desc}
          formChangeHandler={formChangeHandler}
        />
        <div>
          <button
            className="btn btn-danger mr-2"
            type="button"
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button className="btn btn-success mr-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
