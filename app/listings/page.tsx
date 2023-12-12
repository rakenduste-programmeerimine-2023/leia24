"use client"
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
import UrlParam from '@/components/UrlParam'
import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'

import {} from "path";
import "@/styles/banner.css";
import Box from "@mui/material/Box";
import "@/styles/global.css"
import "@/styles/theme.css"
import "@/styles/homepage.css"
import PrimarySearchAppBar from '@/components/PrimarySearchAppBar'
import { BrowserRouter } from 'react-router-dom'

export default function Index() {
  // let combinedData = [1,2,3]
  /*
  const[combinedData, setCombinedData] = useState<Array<Array>([])


  useEffect(() => {
    const combinedData = GetClassifiedsBySearch()
    return combinedData
  });

*/
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await GetClassifiedsBySearch();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
    <div>
      <PrimarySearchAppBar/>
        
      <form action="/listings">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit">Submit</button>
      </form>
      <UrlParam/>
      <h2>Kuulutused</h2><br/>
      <div className="center">
          <BasicPagination/>
        </div>
      
       <Link href="..">Avalehele</Link>
      
        <div>
      
        {data.map((item, index) => (
          <Box className="banner-box" >
          <div key={index} title={item.title}>
            <div className='child'>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className='child'>
              <Box className="title">
                <a href={item.href}>{item.title}</a>
              </Box>
              <div>
                Hind: {item.price !== undefined ? item.price : "N/A"}<br/>
                Asukoht: {item.location !== undefined ? item.location : "N/A"}<br/>
                Kuupäev: {item.date !== undefined ? item.date : "N/A"}<br/>
                Sait: {item.site}<br/>{" "}<br/>
                <button>Salvesta kuulutus</button>
              </div>
            </div>
          </div>
          </Box>
        ))}
        <div className="center">
          <BasicPagination/>
        </div>
    </div>
      
      
    </div>
  </BrowserRouter>
  )
}
