import React from "react";
import { Link } from "react-router-dom";

export default function CreateDeckBtn() {
    return (
        <Link to="/decks/new">
            <button className="btn btn-success my-2 mb-4" >
                <span className="oi oi-plus pr-2" title="plus" aria-hidden="true">
                </span>
                Create Deck
            </button>
        </Link>
    )
}