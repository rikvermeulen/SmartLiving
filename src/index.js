import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Points from './components/pages/Points'
import Challenges from './components/pages/Challenges'
import Graph from './components/pages/Graph'
import Settings from './components/pages/Settings'




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/points" component={Points} />
        <Route exact path="/graph" component={Graph} />
        <Route exact path="/challenges" component={Challenges} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
