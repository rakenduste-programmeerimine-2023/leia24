// app/test/page.tsx
"use client"
import * as React from "react";
import combinedDataOkidoki from "@/components/GetClassifiedsBySearchFromOkidoki";
import GetClassifiedsBySearch from "@/components/GetClassifiedsBySearch";
import { Typography } from "@mui/material";
import TestSearch from "@/components/TestSearch";

const YourComponent = () => {
  const [search, setSearch] = React.useState([]);

  React.useEffect(() => {
    const fetchSearch = async () => {
      const result = await TestSearch();
      setSearch(result);
    };

    fetchSearch();
  }, []); // Run the effect only once when the component mounts

  return (
    <div>
      {search}
    </div>
  );
};

export default YourComponent;

/*
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

    */