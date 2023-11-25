import { JSDOM } from "jsdom";

import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { relative } from "path";


const site = "Soov";
const search = "xbox one";
const encodedSearch = encodeURIComponent(search);
const page = `https://soov.ee/keyword-${encodedSearch}/order-price/order_way-desc/listings.html`;

const GetClassifiedsBySearchFromSoov = async () => {
  const res = await fetch(page); // Replace with the actual URL
  const html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const listings = document.querySelectorAll('.item-list');

  const combinedData = Array.from(listings).map((listing) => {
    const titleElement = listing.querySelector('.add-image a img');
    const relativeTitle = titleElement ? titleElement.getAttribute('alt') : undefined;

    const hrefElement = listing.querySelector('.add-image a');
    const relativeHref = hrefElement ? hrefElement.getAttribute('href') : undefined;

    const imageUrlElement = listing.querySelector('.add-image a img');
    const imageUrl = imageUrlElement ? imageUrlElement.getAttribute('src') : undefined;

    const priceElement = listing.querySelector('.item-price');
    const relativePrice = priceElement ? priceElement.textContent.trim() : undefined;

    const locationElement = listing.querySelector('.item-location');
    const relativeLocation = locationElement ? locationElement.textContent.trim() : undefined;

    const dateElement = listing.querySelector('.date');
    const relativeDate = dateElement ? dateElement.textContent.trim() : undefined;

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
              {item.title}, Price: {item.price !== undefined ? item.price : "N/A"},
              Location: {item.location !== undefined ? item.location : "N/A"},
              Date: {item.date !== undefined ? item.date : "N/A"}
              {/* Add more JSX elements for additional properties */}
            </Typography>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default GetClassifiedsBySearchFromSoov;




