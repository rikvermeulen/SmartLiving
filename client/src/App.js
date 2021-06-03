import React, { useState, useEffect } from "react";
import './sass/app.scss';
import Header from "./components/Header"
import Aside from "./components/Aside"
import Tiles from "./components/Tiles"

function App() {
  return (
    <div className="home">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
        <Tiles/>
        </div>
      </div>
    </div>
  
  );

}

export default App;
