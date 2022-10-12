import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const dataItems = useRef();

  useEffect(() => {
    fetchItems()
  }, [])

  function fetchItems() {
    fetch(`http://localhost:6001/listings`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json)
        dataItems.current = json
      });
  }

  return (
    <div className="app">
      <Header dataItems = {dataItems} setItems = {setItems}/>
      <ListingsContainer items = {items} fetchItems = {fetchItems}/>
    </div>
  );
}

export default App;
