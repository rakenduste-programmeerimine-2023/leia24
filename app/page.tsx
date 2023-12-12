
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
import Link from 'next/link'
import ResponsiveAppBar from '@/components/ResponsiveAppBar'

export default async function Index() {

  return (

    <div>
      <ResponsiveAppBar/>

      <form action="/listings">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit">Submit</button>
      </form>
      
      <h1>Siin on avaleht</h1><br/>
      <ul>
        <li><Link href="/listings">Kuulutustele</Link></li>
        <li><Link href="/listings">Kuulutustele</Link></li>
        <li><Link href="/listings">Kuulutustele</Link></li>
        <AuthButton />
      </ul>
    </div>
  )
}
