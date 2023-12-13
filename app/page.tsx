'use client'
import React from 'react'

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
import SearchContainer from '@/components/SearchContainer'
import "@/styles/homepage.css"
import SearchBar from "@/components/SearchBar"
import PrimarySearchAppBar from "@/components/PrimarySearchAppBar"
import "@/styles/global.css"
import { BrowserRouter } from 'react-router-dom'

import styles from '../styles/theme.css';

export default  function Index() {

  return (

    <BrowserRouter>
    <div>

      <PrimarySearchAppBar/>

      <h2>Tere tulemast!</h2>
      <h1>Leia24</h1><br/>
      


      <ul>
        <li><Link href="/listings">Kuulutustele</Link></li>
        
      </ul>
    </div>
  </BrowserRouter>
  )
}
