'use client';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const InsertFavoriteItem = ({ userId, href }) => {
  const [result, setResult] = useState(null);

  const insertFavoriteItem = async () => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const favoriteItemData = {
      href,
      authuser_id: userId, // Assuming 'authuser_id' is the foreign key in your 'favouriteitem' table
    };

    try {
      const { data, error } = await supabase
        .from('favouriteitem')
        .insert([favoriteItemData]);

      if (error) {
        console.error('Error inserting data into favouriteitem:', error.message);
        setResult(`Error inserting data: ${error.message}`);
      } else {
        console.log('Data inserted successfully!');
        setResult('Data inserted successfully!');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <button onClick={insertFavoriteItem}>Salvesta kuulutus</button>
      {result && <div>{result}</div>}
    </div>
  );
};

export default InsertFavoriteItem;
