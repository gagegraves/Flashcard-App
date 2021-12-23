import React from "react";
import { useRouteMatch } from "react-router-dom";
import DeleteButton from "../../common-components/buttons/DeleteBtn";
import EditButton from "../../common-components/buttons/EditBtn";

//CardListItem is a template that makes an HTML Card with the correct data to be be displayed
export default function CardListItem({ card, setDecks }) {
  const { url } = useRouteMatch(); //Grab the url for the EditButton's path
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col">
          <h4 className="h4">Front</h4>
          <p className="">{card.front}</p>
        </div>
        <div className="col">
          <h4 className="h4">Back</h4>
          <p className="">{card.back}</p>
        </div>
      </div>

      <div className="row justify-content-end">
        <EditButton path={`${url}/cards/${card.id}`} />
        <DeleteButton objToDelete={card} objType="card" setDecks={setDecks} />
      </div>
    </div>
  );
}
