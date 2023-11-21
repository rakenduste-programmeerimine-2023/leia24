
import { useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

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

  

  return (
    <div>
      <ResponsiveAppBar/>
      <input id='search' type='search'></input>
      <h1>Siin on kuulutused</h1><br/>
      <ul>
       <li><Link href="..">Avalehele</Link></li>
      </ul>
      <TestComponent/>
      
      
    </div>
  )
}
// 

//  <GetClassifiedsFromOkidoki></GetClassifiedsFromOkidoki>
//  <GetClassifiedsFromSoov></GetClassifiedsFromSoov>