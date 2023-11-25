
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


  return (
    <div>
      <ResponsiveAppBar/>
      <input id='search' type='search'></input>
      <h1>Siin on kuulutused</h1><br/>
      <ul>
       <li><Link href="..">Avalehele</Link></li>
      </ul>
      <ul>
       <li><GetClassifiedsBySearchFromSoov /></li>
      </ul>
      
      
    </div>
  )
}
