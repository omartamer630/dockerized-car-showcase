"use client";
import React from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [searchText, setSearchText] = React.useState("");
  const [currentManufact, setCurrentManufact] = React.useState("");
  const handleSearch = () => {};
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          setCurrentManufact={setCurrentManufact}
          currentManufact={currentManufact}
        />
      </div>
    </form>
  );
};

export default SearchBar;
