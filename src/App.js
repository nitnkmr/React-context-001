import './App.css';
import Comp from './Component/Comp';
import Toggle from './Component/Toggle';
import { useState,createContext } from "react";
import React from 'react';


export const ThemeContext=React.createContext("hello");
function App() {
  const [first, setfirst] = useState(true)
  function hello(){
    setfirst(!first)

  }
  return (
    <div className="App">
    <h1>
      I Have changed to {first?"light":"dark"} Mode
    </h1>
    <ThemeContext.Provider value={first}>
        <Comp/>
        <Toggle hello={hello}/>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
