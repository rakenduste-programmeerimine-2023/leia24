// TestSearch.js
import { JSDOM } from "jsdom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {} from "path";
import { Button } from "@mui/material";
import pricesOkidoki from "@/components/TestOkidoki";
import pricesSoov from "@/components/TestSoov";

const TestSearch = async () => {
  // Await the results of the async functions
  const okidokiPrices = await pricesOkidoki();
  const soovPrices = await pricesSoov();

  // Concatenate the arrays
  let prices = okidokiPrices.concat(soovPrices);

  // Sort the concatenated array
  prices.sort(function (a, b) {
    return a - b;
  });

  return (
    <div>
      <ul>
        {prices.map((price) => (
          <div key={price}>
            <Typography textAlign="center">
              <div>Price: {price}</div>
            </Typography>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TestSearch;
