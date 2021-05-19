import '../../sass/app.scss';
import Header from "../Header"
import Aside from "../Aside"

function Challenges() {
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