import * as React from "react";
import { JSDOM } from "jsdom-global";
import Typography from "@mui/material/Typography";

const site = "Okidoki";

function saveClassified() {
  // Add your logic to save the classified
}

const GetClassifiedsBySearchFromOkidokiTEST = async (searchQuery) => {
  try {
    const encodedSearch = encodeURIComponent(searchQuery);
    const page = `https://www.okidoki.ee/buy/all/?sort=2&query=${encodedSearch}`;

    const res = await fetch(page);
    const html = await res.text();

    // Use jsdom-global instead of jsdom
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
      const title = linkAndTitle
        ? linkAndTitle.getAttribute("title")
        : undefined;

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
      };
    });

    return combinedData;
  } catch (error) {
    console.error("Error fetching data from Okidoki:", error);
    return [];
  }
};

export default GetClassifiedsBySearchFromOkidokiTEST;
