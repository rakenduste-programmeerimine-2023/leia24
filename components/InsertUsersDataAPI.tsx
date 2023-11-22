'use client'
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const InsertUsersDataAPI = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const insertUserData = async () => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const userDataToInsert = { username, password };

    try {
      const { data, error } = await supabase.from('users').insert([userDataToInsert]);

      if (error) {
        console.error('Error inserting data into users:', error.message);
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
      {result && <div>{result}</div>}
    </div>
  );
};

export default InsertUsersDataAPI;
