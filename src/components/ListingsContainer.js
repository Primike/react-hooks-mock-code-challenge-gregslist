import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, fetchItems}) {
  let list = items.map(item => {
    return (
      <ListingCard item = {item} key = {item.id} deleteItem = {deleteItem}/>
    )
  })

  function deleteItem(event) {
    fetch(`http://localhost:6001/listings/${event.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {fetchItems()})
  }

  return (
    <main>
      <ul className="cards">
        {list}
      </ul>
    </main>
  );
}

export default ListingsContainer;
