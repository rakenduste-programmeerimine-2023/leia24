import { JSDOM } from "jsdom";

import * as React from "react";
import Typography from "@mui/material/Typography";
import {} from "path";
import Search from "@/components/Search";

const search = Search;
const site = "Okidoki";
const encodedSearch = encodeURIComponent(search);
const page = `https://www.okidoki.ee/buy/all/?query=${encodedSearch}&sort=4&pp=200`;
console.log(page);

function saveClassified() {}

// ...

const combinedDataOkidoki = async () => {
  const res = await fetch(page, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
  const html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const classifieds = document.querySelectorAll(".horiz-offer-card");

  const combinedData = Array.from(classifieds).map((classified) => {
    const linkAndTitle = classified.querySelector(
      ".horiz-offer-card__title-link"
    );
    const href = linkAndTitle
      ? "https://www.okidoki.ee" + linkAndTitle.getAttribute("href")
      : undefined;
    const title = linkAndTitle ? linkAndTitle.getAttribute("title") : undefined;

    const priceElement = classified.querySelector(
      ".horiz-offer-card__price-value"
    );
    const price = priceElement ? priceElement.textContent.trim() : undefined;

    const locationElement = classified.querySelector(
      ".horiz-offer-card__location"
    );
    const location = locationElement
      ? locationElement.textContent.trim()
      : undefined;

    const dateElement = classified.querySelector(".horiz-offer-card__date");
    const date = dateElement ? dateElement.textContent.trim() : undefined;

    const imageElement = classified.querySelector(
      ".horiz-offer-card__image-link img"
    );
    const imageUrl = imageElement
      ? imageElement.getAttribute("src")
      : undefined;

    return {
      price,
      href,
      title,
      location,
      date,
      imageUrl,
      site,
    };
  });

  //  console.log({ combinedData });

  return combinedData;
};

export default combinedDataOkidoki;
