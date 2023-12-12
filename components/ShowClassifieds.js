import GetClassifiedsBySearch from "@/components/GetClassifiedsBySearch";

combinedData = GetClassifiedsBySearch();
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
              Price: {item.price !== undefined ? item.price : "N/A"}, Location:{" "}
              {item.location !== undefined ? item.location : "N/A"}, Date:{" "}
              {item.date !== undefined ? item.date : "N/A"},{item.site},{" "}
              <button>Salvesta kuulutus</button>
            </div>
          </Typography>
        </div>
      ))}
    </ul>
  </div>
);
