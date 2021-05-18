import '../../sass/app.scss';
import Header from "../Header"
import Aside from "../Aside"

function Points() {
  return (
    <div className="Points">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
        </div>
      </div>
    </div>
  );

}

export default Points;