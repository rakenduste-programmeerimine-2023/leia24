// components/MyComponent.js
"use client";
import { useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const myArray = ["esimene", "teine"];
const TestComponent = () => {
  console.log({ myArray });
  return (
    <div>
      <ul>
        {myArray.map((page) => (
          <MenuItem key={page} onClick={console.log("click")}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
