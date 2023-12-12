import React, { useEffect, useState } from "react";
import getClassifiedsFromOkidoki from "./GetClassifiedsBySearchFromOkidoki";
import getClassifiedsFromSoov from "./GetClassifiedsBySearchFromSoov";

const CombinedClassifieds = () => {
  const [okidokiData, setOkidokiData] = useState([]);
  const [soovData, setSoovData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from Okidoki
      const okidokiResult = await getClassifiedsFromOkidoki();
      setOkidokiData(okidokiResult);

      // Fetch data from Soov
      const soovResult = await getClassifiedsFromSoov();
      setSoovData(soovResult);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Combined Classifieds</h1>

      <h2>Okidoki Classifieds</h2>
      <ul>
        {okidokiData.map((item, index) => (
          <li key={index} title={item.title}>
            {/* Render your Okidoki data as needed */}
          </li>
        ))}
      </ul>

      <h2>Soov Classifieds</h2>
      <ul>
        {soovData.map((item, index) => (
          <li key={index} title={item.title}>
            {/* Render your Soov data as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CombinedClassifieds;
