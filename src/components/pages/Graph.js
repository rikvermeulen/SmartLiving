import '../../sass/app.scss';
import Header from "../Header"
import Aside from "../Aside"

function Graph() {
  return (
    <div className="graph">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
        </div>
      </div>
    </div>
  );

}

export default Graph;