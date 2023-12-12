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
import "@/components/banner.css";
import Box from "@mui/material/Box";

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
    <div>
      
      <ResponsiveAppBar/>
      <BasicPagination/>
      <Pagination/>
      <form action="/listings">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit">Submit</button>
      </form>
      <h1>Siin on kuulutused</h1><br/>
      <ul>
       <li><Link href="..">Avalehele</Link></li>
      </ul>
      <ul>
        <li>
        <div>
      <ul>
        {data.map((item, index) => (
          <Box className="banner-box" >
          <div key={index} title={item.title}>
            <div>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <Typography textAlign="center">
              <a href={item.href}>{item.title}</a>
              <div>
                Price: {item.price !== undefined ? item.price : "N/A"},
                Location: {item.location !== undefined ? item.location : "N/A"},
                Date: {item.date !== undefined ? item.date : "N/A"},{item.site},{" "}
                <button>Salvesta kuulutus</button>
              </div>
            </Typography>
          </div>
          </Box>
        ))}
      </ul>
    </div>
        </li>
      </ul>
      
      
    </div>
  )
}
