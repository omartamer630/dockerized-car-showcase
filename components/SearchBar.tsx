"use client";
import React from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [searchText, setSearchText] = React.useState("");
  const [manufacturer, setManufacturer] = React.useState("");
  const handleSearch = () => {};
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
