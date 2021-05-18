import '../../sass/app.scss';
import Header from "../Header"
import Aside from "../Aside"

function Settings() {
  return (
    <div className="Settings">
      <Aside/>
      <div className="main">
        <div className="container">
        <Header/>
        </div>
      </div>
    </div>
  );

}

export default Settings;