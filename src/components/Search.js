import React, { useState } from "react";

function Search({dataItems, setItems}) {
  const [text, changeText] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    
    let filteredItems = dataItems.current.filter((item) => {
      return item.description.includes(text)
    })

    setItems(filteredItems)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={text}
        onChange={(e) => changeText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
