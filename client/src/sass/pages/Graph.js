import '../../sass/app.scss';
import Header from "../Header";
import Aside from "../Aside";
import Chart from "../Chart";

function Graph() {
  return (
    <div className="graph">
      <Aside/>
      <div className="main">
        <div className="container">
          <Chart legendPosition="right"/>
        <Header/>
        </div>
      </div>
    </div>
  );

}

export default Graph;