import React from "react";
import { useState } from "react";

function ListingCard({
  description,
  image,
  location,
  id,
  handleDelete
}) {

  const [ isFavorite, setIsFavorite ] = useState(false)

  function toggleFavorite() {
    setIsFavorite((currentState) => !currentState)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
