// ./app/page.tsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation instead of next/router

const Page = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    // Use the search value as needed, e.g., navigate to a new page with the search query
    router.push(`/listings?q=${search}`);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {search}
      </div>
      {/* Other content */}
    </div>
  );
};

export default Page;
