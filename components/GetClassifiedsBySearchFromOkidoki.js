import { JSDOM } from "jsdom";

import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { relative } from "path";

// const GetClassifiedsBySearchFromOkidoki = async (search) => {
const search = "playstation 3";
let relativeHref;
const GetClassifiedsBySearchFromOkidoki = async () => {
  console.log(search);
  const res = await fetch(
    `https://www.okidoki.ee/buy/all/?query=${search}&c=0`
  );
  console.log({ search });
  const html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const links = document.querySelectorAll(".horiz-offer-card__title-link");
  /*
  const classifiedData = Array.from(links).map((link) => {
    const relativeHref = link.getAttribute("href");
    const relativeTitle = link.getAttribute("title");
    return `${relativeTitle}, https://www.okidoki.ee${relativeHref}; `;
  });*/
  const hrefs = Array.from(links).map((link) => {
    const relativeHref = link.getAttribute("href");
    return `https://www.okidoki.ee${relativeHref}`;
  });

  console.log({ hrefs });

  const myArray = ["esimene", "teine"];

  return (
    <div>
      <ul>
        {hrefs.map((page) => (
          <a href={page}>
            <Typography textAlign="center">{page}</Typography>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default GetClassifiedsBySearchFromOkidoki;
