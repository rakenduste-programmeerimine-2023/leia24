import { JSDOM } from "jsdom";

import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { relative } from "path";

// const GetClassifiedsBySearchFromOkidoki = async (search) => {
const search = "playstation 3";
let relativeHref;
let relativeTitle;
let classifiedData;
const GetClassifiedsBySearchFromOkidoki = async () => {
  console.log(search);
  const res = await fetch(
    `https://www.okidoki.ee/buy/all/?query=${search}&c=0`
  );
  const html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const links = document.querySelectorAll(".horiz-offer-card__title-link");
  const prices = document.querySelectorAll(".horiz-offer-card__price-value");

  const data = Array.from(prices).map((price) => {
    const relativePrice = price.textContent;
    return relativePrice;
  });
  console.log({ data });

  const hrefs = Array.from(links).map((link) => {
    const relativeHref = "https://www.okidoki.ee" + link.getAttribute("href");
    const relativeTitle = link.getAttribute("title");
    classifiedData = [relativeHref, relativeTitle];
    return classifiedData;
  });

  return (
    <div>
      <ul>
        {hrefs.map((item, index) => (
          <a key={index} href={item[0]} title={item[1]}>
            <Typography textAlign="center">{item[1]}</Typography>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default GetClassifiedsBySearchFromOkidoki;
