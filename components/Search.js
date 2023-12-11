import UrlParam from "./UrlParam";

const Search = () => {
  // Use the UrlParam component to get the query string
  const queryString = UrlParam();

  // Your logic using the query string
  console.log("Query String in Search component:", queryString);

  return queryString;
};

export default Search;
