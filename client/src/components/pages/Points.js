import '../../sass/app.scss';
import React, { useState, useEffect } from "react";
import Header from "../Header"
import Aside from "../Aside"
import ChartCircle from "../charts/ChartCircle";
import ChartRadar from "../charts/ChartRadar";

import ModalPoints from '../ModalPoints'

function Points() { 
  useEffect(() => {
    document.title = "Punten"
  }, [])
  const [show, setShow] = useState(false);

  return (
    <div className="points">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
        <div className="tiles">
              <div className="tilesContainer-kwart">
                  <a onClick={() => setShow(true)}>
                  <tile4x2 className="tile4x2" id="test">
                    <div className="title">
                      <img alt="" src="./images/Image-api.png"/>
                      <span>Albert Heijn</span>
                      <svg viewBox="0 0 11.009 19.264"><g transform="translate(-119.994 219.264) rotate(-90)"><path d="M209.632,127.707l-7.263-7.3a1.381,1.381,0,0,0-1.963,0,1.4,1.4,0,0,0,0,1.976l8.175,8.22a1.574,1.574,0,0,0,2.1,0l8.175-8.22a1.4,1.4,0,0,0,0-1.976,1.381,1.381,0,0,0-1.963,0Z" transform="translate(0)" /></g></svg>
                    </div>
                    <h3>Gratis zakje<br/>stroopwafels</h3>
                    <p className="points">Aantal punten: <br></br><span>500</span></p>
                  </tile4x2>
                  </a>
                  <a onClick={() => setShow(true)}>
                  <tile4x2 className="tile4x2">
                  <div className="title">
                      <img alt="" src="./images/Image-epic.png"/>
                      <span>Epic Games</span>
                      <svg viewBox="0 0 11.009 19.264"><g transform="translate(-119.994 219.264) rotate(-90)"><path d="M209.632,127.707l-7.263-7.3a1.381,1.381,0,0,0-1.963,0,1.4,1.4,0,0,0,0,1.976l8.175,8.22a1.574,1.574,0,0,0,2.1,0l8.175-8.22a1.4,1.4,0,0,0,0-1.976,1.381,1.381,0,0,0-1.963,0Z" transform="translate(0)" /></g></svg>
                    </div>
                    <h3>Tien euro<br/>korting bij aankoop</h3>
                    <p className="points">Aantal punten: <br></br><span>700</span></p>
                  </tile4x2>
                  </a>
                  <a onClick={() => setShow(true)}>
                  <tile4x2 className="tile4x2">
                  <div className="title">
                      <img alt="" src="./images/Image-inter.png" style={{width: 8 + '%'}} />
                      <span>Zalando</span>
                      <svg viewBox="0 0 11.009 19.264"><g transform="translate(-119.994 219.264) rotate(-90)"><path d="M209.632,127.707l-7.263-7.3a1.381,1.381,0,0,0-1.963,0,1.4,1.4,0,0,0,0,1.976l8.175,8.22a1.574,1.574,0,0,0,2.1,0l8.175-8.22a1.4,1.4,0,0,0,0-1.976,1.381,1.381,0,0,0-1.963,0Z" transform="translate(0)" /></g></svg>
                    </div>
                    <h3>20% korting op <br/>kledingstukken in de sale</h3>
                    <p className="points">Aantal punten: <br></br><span>500</span></p>
                  </tile4x2>
                  </a>
                  <a onClick={() => setShow(true)}>
                    <tile4x2 className="tile4x2">
                    <div className="title">
                        <img alt="" src="./images/Image-media.png" style={{width: 8 + '%'}}/>
                        <span>Bol.com</span>
                        <svg viewBox="0 0 11.009 19.264"><g transform="translate(-119.994 219.264) rotate(-90)"><path d="M209.632,127.707l-7.263-7.3a1.381,1.381,0,0,0-1.963,0,1.4,1.4,0,0,0,0,1.976l8.175,8.22a1.574,1.574,0,0,0,2.1,0l8.175-8.22a1.4,1.4,0,0,0,0-1.976,1.381,1.381,0,0,0-1.963,0Z" transform="translate(0)" /></g></svg>
                    </div>
                    <h3>5 euro korting<br/>op een artikel<br/>naar keuze</h3>
                      <p className="points">Aantal punten: <br></br><span>500</span></p>
                    </tile4x2>
                  </a>
                  <ModalPoints title="My Modal" onClose={() => setShow(false)} show={show}>
                    <p>This is modal body</p>
                  </ModalPoints>
              </div>
              <div className="tilesContainer-main">
                  <tile4x4 className="tile4x4" id="tile4x4left">
                  <div className="tile_title">
                        <h2>Saldo</h2>
                    </div>
                    <div className="balance">
                       <p id="test1">3200</p>
                       <div className="percentage">
                        <span>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                          11%
                          </span>
                       </div>
                    </div>
                  </tile4x4>
                  <tile4x4 className="tile4x4" id="tile4x4right">
                    <div className="tile_title">
                        <h2>Punten</h2>
                    </div>
                    <ChartCircle/>
                    <div className="points-total">
                        <span>1800</span>
                        <p>Punten</p>
                    </div>
                    <div className="disclaimer">
                      <p>Wordt elke maand gereset</p>
                    </div>
                  </tile4x4>
                  <tile8x8 className="tile8x4">
                    <h2>Statistieken besparen</h2>
                    <ChartRadar/>
                  </tile8x8>
              </div>
              <div className="tilesContainer-aside">
                <div className="tile4x4" id="tile4x4top">
                    <h3>Bitmoji</h3>
                    <div className="bitmoji">
                      <img src="images/Water team 7 neutral animation.gif"></img>   
                    </div>                  
                </div>
                <div className="tile4x4" id="tile4x4bottom">
                  <div className="friends">
                    <h3>Ranglijst</h3>
                    <ul>
                        <li>
                            <img src="./images/profile-two.png"/>
                            <p>James</p>
                            <span>2100</span>
                        </li>
                        <li>
                            <img src="./images/man.png"/>
                            <p style={{color: '#8624dc',fontWeight: '600'}}>Sara</p>
                            <span style={{color: '#8624dc',fontWeight: '600'}}>1800</span>
                        </li>
                        <li>
                            <img src="./images/profile-three.png"/>
                            <p>Linda</p>
                            <span>1700</span>
                        </li>
                        <li>
                            <img src="./images/profile-four.png"/>
                            <p>Mazikeen</p>
                            <span>800</span>
                        </li>
                    </ul>
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Points;