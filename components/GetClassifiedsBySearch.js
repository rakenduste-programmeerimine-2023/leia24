import { JSDOM } from "jsdom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import combinedDataOkidoki from "@/components/GetClassifiedsBySearchFromOkidoki";
import combinedDataSoov from "@/components/GetClassifiedsBySearchFromSoov";
import Pagination from "@/components/Pagination";

const GetClassifiedsBySearch = async () => {
  const okidokiData = await combinedDataOkidoki();
  const soovData = await combinedDataSoov();

  let combinedData = okidokiData.concat(soovData);

  combinedData.sort(function (a, b) {
    const priceA = parseFloat(a.price) || 0;
    const priceB = parseFloat(b.price) || 0;
    return priceA - priceB;
  });

  let fromAd = 0;
  let toAd = 25;
  combinedData = combinedData.slice(fromAd, toAd);

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
                Date: {item.date !== undefined ? item.date : "N/A"},{item.site},{" "}
                <button>Salvesta kuulutus</button>
              </div>
            </Typography>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GetClassifiedsBySearch;
