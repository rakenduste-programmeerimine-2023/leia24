// UrlParam.js
"use client";
import { useEffect, useState } from "react";

const UrlParam = () => {
  let queryString = window.location.search;
  console.log(typeof queryString);
  var urlParams = new URLSearchParams(queryString);
  var searchValue = urlParams.get("search");

  console.log(searchValue);

  // If searchValue is null, you might want to return a default value or handle it appropriately
  return searchValue || "default-value";
};

export default UrlParam;
