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
      <NextLogo></NextLogo>
      <ResponsiveAppBar/>
      <h1>Siin on avaleht</h1><br/>
      <ul>
        <li><Link href="/listings">Kuulutustele</Link></li>
        <li><Link href="/listings">Kuulutustele</Link></li>
        <li><Link href="/listings">Kuulutustele</Link></li>
      </ul>

      
    </div>
  )
}


//  <GetClassifiedsFromOkidoki></GetClassifiedsFromOkidoki>
//  <a href='/listings'>Kuulutused hrefiga</a>