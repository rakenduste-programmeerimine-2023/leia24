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
import GetUsersData from '@/components/GetUsersData'

export default async function Index() {

  const getClassifieds = async () => {
    fetch('https://localhost:3000/api/getClassifieds')
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <NextLogo></NextLogo>
      <GetClassifiedsFromOkidoki></GetClassifiedsFromOkidoki>
      <hr></hr>
      <GetClassifiedsFromSoov></GetClassifiedsFromSoov>
      <hr></hr>
      <GetUsersData></GetUsersData>
      
    </div>
  )
}


//  <GetClassifiedsFromOkidoki></GetClassifiedsFromOkidoki>