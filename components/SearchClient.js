"use client";

import { useState } from "react";

const SearchClient = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log({ searchTerm });
    onSearch(searchTerm);
  };

  return (
    <form action="/listings">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchClient;
