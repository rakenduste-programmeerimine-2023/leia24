
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
import CombinedClassifieds from '@/components/CombinedClassifieds'
import GetClassifiedsBySearch from '@/components/GetClassifiedsBySearch'
import ResponsiveAppBar from '@/components/ResponsiveAppBar'
import Link from 'next/link'

import TestSearch from '@/components/TestSearch'
import BasicPagination from '@/components/BasicPagination'
import Pagination from '@/components/Pagination'

export default async function Index() {


  return (
    <div>
      <ResponsiveAppBar/>
      <BasicPagination/>
      <Pagination/>
      <form action="/listings">
        <input type="text" placeholder="Search.." name="search1"></input>
        <button type="submit">Submit</button>
      </form>
      <h1>Siin on kuulutused</h1><br/>
      <ul>
       <li><Link href="..">Avalehele</Link></li>
      </ul>
      <ul>
       <li><GetClassifiedsBySearch/></li>
      </ul>
      
      
    </div>
  )
}
