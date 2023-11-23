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

  const linksAndTitles = document.querySelectorAll(
    ".horiz-offer-card__title-link"
  );
  const prices = document.querySelectorAll(".horiz-offer-card__price-value");

  const combinedData = Array.from(prices).map((price, index) => {
    const relativePrice = price.textContent.trim();
    const link = linksAndTitles[index];

    const relativeHref = "https://www.okidoki.ee" + link.getAttribute("href");
    const relativeTitle = link.getAttribute("title");

    return {
      price: relativePrice,
      href: relativeHref,
      title: relativeTitle,
    };
  });

  console.log({ combinedData });

  return (
    <div>
      <ul>
        {combinedData.map((item, index) => (
          <a key={index} href={item.href} title={item.title}>
            <Typography textAlign="center">
              {item.title}, {item.price}
            </Typography>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default GetClassifiedsBySearchFromOkidoki;
