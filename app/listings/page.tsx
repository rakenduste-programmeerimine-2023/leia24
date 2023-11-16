import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import NextLogo from '@/components/NextLogo'
import AddNumbers from '@/components/AddNumbers'
import GetClassified from '@/components/GetClassifiedsFromOkidoki'
import GetClassifiedsFromOkidoki from '@/components/GetClassifiedsFromOkidoki'
import GetClassifiedsFromSoov from '@/components/GetClassifiedsFromSoov'
import GetClassifiedsBySearchFromOkidoki from '@/components/GetClassifiedsBySearchFromOkidoki'
import GetClassifiedsBySearchFromSoov from '@/components/GetClassifiedsBySearchFromSoov'
import BoxBasic from '@/components/BoxBasic'
import TestComponent from '@/components/TestComponent'
import ResponsiveAppBar from '@/components/ResponsiveAppBar'
import Link from 'next/link'

export default async function Index() {

  const HomePage = () => {
    const myArray = [1, 2, 3, 4, 5];
  
    return (
      <div>
        <h1>My Next.js Page</h1>
        <TestComponent myArray={myArray} />
      </div>
    );
  };

  return (
    <div>
      <ResponsiveAppBar/>
      <input id='search' type='search'></input>
      <h1>Siin on kuulutused</h1><br/>
      <ul>
       <li><Link href="..">Avalehele</Link></li>
      </ul>
      
      <ul>
       <li><GetClassifiedsBySearchFromOkidoki /></li>
      </ul>
      
      
    </div>
  )
}
// 

//  <GetClassifiedsFromOkidoki></GetClassifiedsFromOkidoki>
//  <GetClassifiedsFromSoov></GetClassifiedsFromSoov>