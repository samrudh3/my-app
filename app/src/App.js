import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Login } from "./Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from "./signup";
import Home from "./Pages/home";
import companyInfo from "./Pages/companyInfo";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/app" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/info" component={companyInfo} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
