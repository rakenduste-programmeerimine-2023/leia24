'use client';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { useState } from 'react';

const InsertUsersDataTEST = () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handler for inserting user data
  const insertUserData = async () => {
    const userDataToInsert = { username, password };

    try {
      const { data, error } = await supabase.from('users').insert([userDataToInsert]);

      if (error) {
        console.error('Error inserting data into users:', error.message);
        // Handle error if needed
      } else {
        console.log('Data inserted successfully!');
        // Handle success if needed
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error if needed
    }
  };

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={insertUserData}>Insert User Data</button>
    </div>
  );
};

export default InsertUsersDataTEST;
