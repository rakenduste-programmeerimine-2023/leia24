// app/test/page.tsx
"use client"
import * as React from "react";
import combinedDataOkidoki from "@/components/GetClassifiedsBySearchFromOkidoki";
import GetClassifiedsBySearch from "@/components/GetClassifiedsBySearch";

const YourComponent = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await GetClassifiedsBySearch();
      setData(result);
    };

    fetchData();
  }, []); // Run the effect only once when the component mounts

  return (
    <div>
      <h1>Your Component</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>Location: {item.location}</p>
            {/* Add other properties as needed */}
            <img src={item.imageUrl} alt={item.title} />
          </li>
        ))}
      </ul>
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