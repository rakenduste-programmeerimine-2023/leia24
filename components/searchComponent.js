"use client";
import * as React from "react";
import GetClassifiedsBySearchFromOkidokiTEST from "./GetClassifiedsBySearchFromOkidokiTEST";
import Typography from "@mui/material/Typography"; // Import Typography

const site = "Okidoki";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await GetClassifiedsBySearchFromOkidokiTEST(searchQuery);
      setSearchResult(result);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display search results if available */}
      {searchResult.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {searchResult.map((item, index) => (
            <div key={index} title={item.title}>
              <div>
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <Typography textAlign="center">
                <a href={item.href}>{item.title}</a>
                <div>
                  Price: {item.price !== undefined ? item.price : "N/A"},
                  Location:{" "}
                  {item.location !== undefined ? item.location : "N/A"}, Date:{" "}
                  {item.date !== undefined ? item.date : "N/A"}, {site},{" "}
                </div>
              </Typography>
            </div>
          ))}
        </div>
      )}

      {/* Display a message if there are no search results */}
      {searchResult.length === 0 && <div>No results found.</div>}
    </div>
  );
};

export default SearchComponent;
