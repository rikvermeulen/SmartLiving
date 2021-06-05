import '../../sass/app.scss';
import Header from "../Header"
import Aside from "../Aside"
import React, { useState, useEffect } from "react";

function Challenges() {
  useEffect(() => {
    document.title = "Uitdagingen"
  }, [])
  return (
    <div className="challenges">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
        </div>
      </div>
    </div>
  );

}

export default Challenges;