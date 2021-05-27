import '../../sass/app.scss';
import Header from "../Header"
import Aside from "../Aside"
import Chart from "../Chart";

function Graph() {
  return (
    <div className="graph">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
          <div className="tiles">
              <div className="tilesContainer-full" id="tilesContainerLeft">
                  <div className="tile-full">
                    <Chart/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Graph;