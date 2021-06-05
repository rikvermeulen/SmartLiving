import React, { useState, useEffect } from "react";
import Header from "../Header"
import Aside from "../Aside"

import Toggle from "../style/Toggler"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../style/Globalstyles";
import { lightTheme, darkTheme } from "../style/Themes";
import  {useDarkMode} from "../style/useDarkMode";

function Settings() {
  useEffect(() => {
    document.title = "Instellingen"
  }, [])
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <div className="settings">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
        <div className="tiles">
              <div className="tilesContainer-full" id="tilesContainerLeft">
                  <tilefull className="tile-full" style={{ 'backgroundColor': '#fff'}}>
                  <li>
                    <Toggle theme={theme} toggleTheme={themeToggler} />
                    </li>
                  </tilefull>
               </div>
        </div>
        </div>
      </div>
    </div>
  );

}

export default Settings;