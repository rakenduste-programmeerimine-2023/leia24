import { useState } from "react";
import { JSDOM } from "jsdom";
import Typography from "@mui/material/Typography";

const GetClassifiedsBySearchFromOkidokiTEST = ({ searchQuery }) => {
  const [combinedData, setCombinedData] = useState([]);

  const handleSearch = async () => {
    const encodedSearch = encodeURIComponent(searchQuery);
    const page = `https://www.okidoki.ee/buy/all/?sort=2&query=${encodedSearch}`;

    const res = await fetch(page);
    const html = await res.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const classifieds = document.querySelectorAll(".horiz-offer-card");

    const newData = Array.from(classifieds).map((classified) => {
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

    setCombinedData(newData);
  };

  return (
    <div>
      {/* Input field for search */}
      <input
        type="text"
        placeholder="Search.."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display classifieds data */}
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

export default GetClassifiedsBySearchFromOkidokiTEST;
