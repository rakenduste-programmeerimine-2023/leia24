"use client";
// components/SearchContainer.js
import React, { useState } from "react";
import Search from "./Search";
import DisplaySearchValue from "./DisplaySearchValue";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Add your search logic here
    console.log("Performing search with value:", searchValue);
  };

  return (
    <div>
      <Search
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
      />
      <DisplaySearchValue searchValue={searchValue} />
    </div>
  );
};

export default SearchContainer;
