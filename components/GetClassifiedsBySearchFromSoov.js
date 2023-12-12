"use server";
import { JSDOM } from "jsdom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {} from "path";
import { Button } from "@mui/material";
import Search from "@/components/Search";

const search = Search;
const site = "Soov";
const encodedSearch = encodeURIComponent(search);
const page = [
  `https://soov.ee/keyword-${encodedSearch}/order-price/order_way-asc/listings.html`,
  `https://soov.ee/keyword-${encodedSearch}/order-price/order_way-asc/2/listings.html`,
];

console.log(page);

function saveClassified() {}

const combinedDataSoov = async () => {
  const combinedData = [];

  for (let i = 0; i < page.length; i++) {
    const res = await fetch(page[i], {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    const html = await res.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const classifieds = document.querySelectorAll(
      ".item-list:not([class*=' '])"
    );

    const dataFromPage = Array.from(classifieds).map((classified) => {
      const titleElement = classified.querySelector(".add-image a img");
      const title = titleElement ? titleElement.getAttribute("alt") : undefined;

      const hrefElement = classified.querySelector(".add-image a");
      const href = hrefElement ? hrefElement.getAttribute("href") : undefined;

      const imageUrlElement = classified.querySelector(".add-image a img");
      const imageUrl = imageUrlElement
        ? imageUrlElement.getAttribute("src")
        : undefined;

      const priceElement = classified.querySelector(".item-price");
      const price = priceElement ? priceElement.textContent.trim() : undefined;

      const locationElement = classified.querySelector(".item-location");
      const location = locationElement
        ? locationElement.textContent.trim()
        : undefined;

      const dateElement = classified.querySelector(".date");
      const date = dateElement ? dateElement.textContent.trim() : undefined;

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

    combinedData.push(...dataFromPage);
  }

  return combinedData;
};

combinedDataSoov()
  .then((data) => {})
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

export default combinedDataSoov;
