import '../../sass/app.scss';
import Header from "../Header"
import Aside from "../Aside"

function Points() {
  return (
    <div className="points">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
        <div className="tiles">
              <div className="tilesContainer-kwart">
                  <div className="tile4x2">
                    <div className="title">
                      <h3>Gratis zakje stroopwafels</h3>
                      <img alt="" src="./images/Image-api.png"/>
                    </div>
                    <p className="points">Aantal punten: <br></br><span>500</span></p>
                    <div className="button">
                      <button>Verzilveren</button>
                    </div>
                  </div>
                  <div className="tile4x2">
                  <div className="title">
                      <h3>Gratis zakje stroopwafels</h3>
                      <img alt="" src="./images/Image-epic.png"/>
                    </div>
                    <p className="points">Aantal punten: <br></br><span>500</span></p>
                    <div className="button">
                      <button>Verzilveren</button>
                    </div>
                  </div>
                  <div className="tile4x2">
                  <div className="title">
                      <h3>Gratis zakje stroopwafels</h3>
                      <img alt="" src="./images/Image-inter.png" style={{width: 14 + '%'}} />
                    </div>
                    <p className="points">Aantal punten: <br></br><span>500</span></p>
                    <div className="button">
                      <button>Verzilveren</button>
                    </div>
                  </div>
                  <div className="tile4x2">
                  <div className="title">
                      <h3>Gratis zakje stroopwafels</h3>
                      <img alt="" src="./images/Image-media.png" style={{width: 14 + '%'}}/>
                    </div>
                    <p className="points">Aantal punten: <br></br><span>500</span></p>
                    <div className="button">
                      <button>Verzilveren</button>
                    </div>
                  </div>
              </div>
              <div className="tilesContainer">
                  <div className="tile8x8">
                  </div>
              </div>
              <div className="tilesContainer-kwart">
                <div className="tile4x4" id="tile4x4Left">
                        <div className="tile_title">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18.514" height="22.021" viewBox="0 0 18.514 22.021"><g id="Coin-ada-big" transform="translate(-27.491 -9.6)"><path id="Path_24" data-name="Path 24" d="M46,22.881a.974.974,0,0,0-.993-.887H42.2l-.768-1.947H43.17a.973.973,0,0,0,.993-.887.92.92,0,0,0-.914-.967H40.707l-3.178-8.011a.925.925,0,0,0-.861-.583.953.953,0,0,0-.861.583l-3.046,8H30.273a.973.973,0,0,0-.993.887.92.92,0,0,0,.914.967h1.814l-.742,1.933H28.485a.973.973,0,0,0-.993.887.92.92,0,0,0,.914.967h2.132l-2.489,6.462a.934.934,0,0,0,.53,1.2.672.672,0,0,0,.318.053.912.912,0,0,0,.861-.583l2.754-7.124h8.382l2.86,7.2a.888.888,0,0,0,.861.583,1.55,1.55,0,0,0,.344-.053.917.917,0,0,0,.5-1.2l-2.6-6.515h2.105A.965.965,0,0,0,46,22.881Zm-9.3-9.772,2,5.072H34.762l1.947-5.072Zm-3.443,8.885.742-1.947H39.4l.768,1.947h-6.9Z" transform="translate(0)"/></g></svg></span>
                            <h2>Punten</h2>
                        </div>    
                        <div class="point">
                            <h3>U kunt de punten inwisselen voor leuke prijzen! </h3>
                                <p className="points">Aantal punten: <br></br><span> 300</span></p>
                        </div>                   
                        </div>
                        <div className="tile4x4" id="tile4x4Right">
                            <div className="tile_title">
                                <span><svg viewBox="-21 -21 682.66644 682"><path d="m256.78125 304.140625 42.078125-42.078125c-46.339844-16.519531-100.179687-6.265625-137.21875 30.773438-51.238281 51.246093-51.238281 134.609374 0 185.847656 51.242187 51.242187 134.609375 51.242187 185.839844 0 36.972656-36.960938 47.269531-90.640625 30.890625-136.910156l-42.191406 42.191406c.449218 21.480468-7.488282 43.097656-23.84375 59.449218-31.816407 31.824219-83.597657 31.824219-115.429688 0-31.816406-31.820312-31.816406-83.605468 0-115.421874 16.464844-16.464844 38.257812-24.402344 59.875-23.851563zm0 0"/><path d="m407.054688 313.089844c29.84375 62.75 18.828124 140.246094-33.042969 192.121094-65.859375 65.859374-173.027344 65.859374-238.886719 0-65.859375-65.859376-65.859375-173.027344 0-238.886719 51.945312-51.949219 129.59375-62.925781 192.394531-32.921875l63.019531-63.019532c-98.402343-62.136718-230.398437-50.371093-316.0625 35.292969-99.300781 99.300781-99.300781 260.878907 0 360.179688 99.300782 99.300781 260.878907 99.300781 360.179688 0 85.589844-85.585938 97.417969-217.445313 35.445312-315.8125zm0 0"/><path d="m638.75 85.78125c-2.808594-8.066406-9.820312-13.679688-18.308594-14.664062l-45.929687-5.296876-5.300781-45.925781c-.980469-8.488281-6.59375-15.5-14.660157-18.3125-8.0625-2.808593-16.824219-.804687-22.863281 5.234375l-90.796875 90.796875c-4.789063 4.789063-7.09375 11.394531-6.316406 18.128907l6.570312 56.925781-171.554687 171.550781c-15.578125-5.589844-33.699219-2.167969-46.152344 10.292969-17.203125 17.199219-17.203125 45.1875 0 62.382812 17.195312 17.199219 45.179688 17.203125 62.382812 0 12.460938-12.460937 15.882813-30.574219 10.292969-46.15625l171.550781-171.554687 56.925782 6.574218c6.726562.777344 13.339844-1.527343 18.128906-6.320312l90.796875-90.792969c6.039063-6.042969 8.046875-14.800781 5.234375-22.863281zm0 0"/></svg></span>
                                <h2>Bitmoji</h2>
                            </div>
                            <div>
                                <img src="images/Water team 7 neutral animation.gif"></img>   
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