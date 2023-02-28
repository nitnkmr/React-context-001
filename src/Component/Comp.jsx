import React from 'react'
import { useState, createContext, useContext } from "react";
import {ThemeContext} from "../App"
const themes = {
    light: {
      color: "#000000",
    },
    dark: {
      color: "aqua",
      background: "#222222"
    }
  };

const Comp = () => {
    const theme = useContext(ThemeContext);
  return (
    <div style={theme?themes.light:themes.dark}>        
        <div><a style={theme?{color:'blue'}:{color:"yellow"}} href="#">Geekster</a></div>
        <div><a style={theme?{color:'blue'}:{color:"yellow"}} href="#">home</a></div>
        <div><a style={theme?{color:'blue'}:{color:"yellow"}} href="#">contact</a></div>
        <div><a style={theme?{color:'blue'}:{color:"yellow"}} href="#">service</a></div>
    </div>
  )
}

export default Comp