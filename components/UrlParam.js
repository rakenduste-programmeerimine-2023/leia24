"use client";
import { useEffect, useState } from "react";
/*
const UrlParam = () => {
    
  const [queryString, setQueryString] = useState("");

  useEffect(() => {
    // Fetch query string on the client side
    const queryString = window.location.search;
    console.log({ queryString });

    // Set the query string in the component state
    setQueryString(queryString);
  }, []);
*/

const UrlParam = () => {
  let queryString = window.location.search;
  console.log(typeof queryString);
  var urlParams = new URLSearchParams(queryString);

  // Get the value of the 'search' parameter
  var searchValue = urlParams.get("search");

  console.log(searchValue);

  return searchValue;
};

export default UrlParam;
