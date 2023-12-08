// components/Search.js
import React from "react";

const Search = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>Search</button>
      {/* Add more search-related components or logic here */}
    </div>
  );
};

export default Search;
