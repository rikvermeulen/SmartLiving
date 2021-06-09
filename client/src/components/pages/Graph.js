import '../../sass/app.scss';
import Header from "../Header"
import Aside from "../Aside"
import Chart from "../Chart";
import React, { useState, useEffect } from "react";

import ChartGas from "../charts/ChartGas";
import ChartElec from "../charts/ChartElec";
import ChartWater from "../charts/ChartWater";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Graph() {
  useEffect(() => {
    document.title = "Verbruik"
  }, [])
  return (
    <div className="graph">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
          <div className="tiles">
              <div className="tilesContainer-full">
                  <tilefull className="tile-full">
                    <Tabs>
                      <TabList>
                        <Tab>Gas</Tab>
                        <Tab>Elektriciteit</Tab>
                        <Tab>Water</Tab>
                      </TabList>

                      <TabPanel>
                        <div className="tile_title">    
                          <span><svg viewBox="0 0 478 478"><path d="M119.5,187.75H17.1c-9.4,0-17,7.6-17.1,17.1v256c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1v-256C136.6,195.35,128.9,187.75,119.5,187.75z"/><path d="M290.2,0.05H187.8c-9.4,0-17.1,7.6-17.1,17v443.8c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1V17.15C307.3,7.65,299.6,0.05,290.2,0.05z"/><path d="M460.9,136.55H358.5c-9.5,0-17.1,7.6-17.1,17.1v307.2c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1v-307.2C478,144.15,470.3,136.55,460.9,136.55z"/></svg></span>
                          <h2>Gas</h2>
                        </div>
                        <ChartGas/>
                      </TabPanel>
                      <TabPanel>
                        <div className="tile_title">    
                            <span><svg viewBox="0 0 478 478"><path d="M119.5,187.75H17.1c-9.4,0-17,7.6-17.1,17.1v256c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1v-256C136.6,195.35,128.9,187.75,119.5,187.75z"/><path d="M290.2,0.05H187.8c-9.4,0-17.1,7.6-17.1,17v443.8c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1V17.15C307.3,7.65,299.6,0.05,290.2,0.05z"/><path d="M460.9,136.55H358.5c-9.5,0-17.1,7.6-17.1,17.1v307.2c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1v-307.2C478,144.15,470.3,136.55,460.9,136.55z"/></svg></span>
                            <h2>Elektriciteit</h2>
                        </div>
                        <ChartElec/>
                      </TabPanel>
                      <TabPanel>
                        <div className="tile_title">    
                            <span><svg viewBox="0 0 478 478"><path d="M119.5,187.75H17.1c-9.4,0-17,7.6-17.1,17.1v256c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1v-256C136.6,195.35,128.9,187.75,119.5,187.75z"/><path d="M290.2,0.05H187.8c-9.4,0-17.1,7.6-17.1,17v443.8c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1V17.15C307.3,7.65,299.6,0.05,290.2,0.05z"/><path d="M460.9,136.55H358.5c-9.5,0-17.1,7.6-17.1,17.1v307.2c0,9.5,7.7,17.1,17.1,17.1h102.4c9.5,0,17.1-7.7,17.1-17.1v-307.2C478,144.15,470.3,136.55,460.9,136.55z"/></svg></span>
                            <h2>Water</h2>
                        </div>
                        <ChartWater/>
                      </TabPanel>
                    </Tabs>
                  </tilefull>
              </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Graph;