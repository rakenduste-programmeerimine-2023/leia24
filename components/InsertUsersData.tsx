import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const InsertUsersData = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const userDataToInsert = { username: 'exampleUsername', password: 'examplePassword' };

  try {
    const { data, error } = await supabase.from('users').insert([userDataToInsert]);

    if (error) {
      console.error('Error inserting data into users:', error.message);
      return <div>Error inserting data</div>;
    }

    return <div>Data inserted successfully!</div>;
  } catch (error) {
    console.error('Error:', error.message);
    return <div>Error: {error.message}</div>;
  }
};

export default InsertUsersData;
