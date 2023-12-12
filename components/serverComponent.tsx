// serverComponent.tsx

async function fetchData() {
    // Fetch data from your API or any other source
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
  
    return data;
  }
  
  export function MyServerComponent() {
    // This component doesn't render anything, it's just for fetching data on the server side.
    return null;
  }
  
  MyServerComponent.getServerData = fetchData;
  
  export default MyServerComponent;
  