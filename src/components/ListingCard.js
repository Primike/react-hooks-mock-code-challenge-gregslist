import React from "react";

function ListingCard({item, deleteItem}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick = {deleteItem} id = {item.id}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
