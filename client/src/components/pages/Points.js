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
                  </div>
                  <div className="tile4x2">
                  </div>
                  <div className="tile4x2">
                  </div>
                  <div className="tile4x2">
                  </div>
              </div>
              <div className="tilesContainer">
                  <div className="tile8x8">
                  </div>
              </div>
              <div className="tilesContainer-kwart">
                  <div className="tile4x4">
                  </div>
                  <div className="tile4x4">
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Points;