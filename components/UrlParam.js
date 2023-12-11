"use client";

import { stringify } from "querystring";

const UrlParam = () => {
  let queryString = window.location.search;
  console.log(queryString);

  return queryString;
};

export default UrlParam;
