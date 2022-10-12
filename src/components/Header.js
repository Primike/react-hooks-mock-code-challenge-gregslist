import React from "react";
import Search from "./Search";

function Header({dataItems, setItems}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search dataItems = {dataItems} setItems = {setItems}/>
    </header>
  );
}

export default Header;
