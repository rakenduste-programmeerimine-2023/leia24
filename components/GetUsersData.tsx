
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const GetUsersData = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Assuming 'users' is a table in the 'public' schema of the 'Leia24' database
  const { data: usersData, error } = await supabase.from('users').select();

  if (error) {
    console.error('Error querying data from users:', error.message);
    return <div>Error querying data</div>;
  }

  return <pre>{JSON.stringify(usersData, null, 2)}</pre>;
};

export default GetUsersData;
