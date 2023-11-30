//"use client";
import { JSDOM } from "jsdom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {} from "path";
import InsertFavoriteItem from "./InsertFavouriteItem";
import SearchComponent from "./search";

const site = "Okidoki";
const search = "xbox one";
const encodedSearch = encodeURIComponent(search);
const page = `https://www.okidoki.ee/buy/all/?sort=2&query=${encodedSearch}`;
console.log(page);

//function saveClassified() {}

const GetClassifiedsBySearchFromOkidoki = async () => {
  //const { user } = supabase.auth.session();
  const res = await fetch(page);
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
    };
  });

  // console.log({ combinedData });

  return (
    <div>
      <ul>
        {combinedData.map((item, index) => (
          <div key={index} title={item.title}>
            <div>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <Typography textAlign="center">
              <a href={item.href}>{item.title}</a>
              <div>
                Price: {item.price !== undefined ? item.price : "N/A"},
                Location: {item.location !== undefined ? item.location : "N/A"},
                Date: {item.date !== undefined ? item.date : "N/A"}, {site},
              </div>
            </Typography>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GetClassifiedsBySearchFromOkidoki;
//<InsertFavoriteItem userId={user?.id} href={item.href} />
// pull request
