import { JSDOM } from "jsdom";

import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { relative } from "path";

// const GetClassifiedsBySearchFromOkidoki = async (search) => {
const site = "Okidoki";
const search = "xbox one";
const encodedSearch = encodeURIComponent(search);
const page = `https://www.okidoki.ee/buy/all/?sort=2&query=${encodedSearch}`;
console.log({ page });
let relativeHref;
let relativeTitle;
let classifiedData;

const GetClassifiedsBySearchFromOkidoki = async () => {
  console.log(search);
  const res = await fetch(page);
  const html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const classifieds = document.querySelectorAll(".horiz-offer-card");

  const combinedData = Array.from(classifieds).map((classified) => {
    const linkAndTitle = classified.querySelector(
      ".horiz-offer-card__title-link"
    );
    const relativeHref = linkAndTitle
      ? "https://www.okidoki.ee" + linkAndTitle.getAttribute("href")
      : undefined;
    const relativeTitle = linkAndTitle
      ? linkAndTitle.getAttribute("title")
      : undefined;

    const priceElement = classified.querySelector(
      ".horiz-offer-card__price-value"
    );
    const relativePrice = priceElement
      ? priceElement.textContent.trim()
      : undefined;

    const locationElement = classified.querySelector(
      ".horiz-offer-card__location"
    );
    const relativeLocation = locationElement
      ? locationElement.textContent.trim()
      : undefined;

    const dateElement = classified.querySelector(".horiz-offer-card__date");
    const relativeDate = dateElement
      ? dateElement.textContent.trim()
      : undefined;

    const imageElement = classified.querySelector(
      ".horiz-offer-card__image-link img"
    );
    const imageUrl = imageElement
      ? imageElement.getAttribute("src")
      : undefined;

    return {
      price: relativePrice,
      href: relativeHref,
      title: relativeTitle,
      location: relativeLocation,
      date: relativeDate,
      imageUrl: imageUrl,
    };
  });

  // console.log({ combinedData });

  return (
    <div>
      <ul>
        {combinedData.map((item, index) => (
          <a key={index} href={item.href} title={item.title}>
            <div>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <Typography textAlign="center">
              {item.title}, {item.price !== undefined ? item.price : "N/A"},
              Location: {item.location !== undefined ? item.location : "N/A"},
              Date: {item.date !== undefined ? item.date : "N/A"}, {site}
              {/* Add more JSX elements for additional properties */}
            </Typography>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default GetClassifiedsBySearchFromOkidoki;
