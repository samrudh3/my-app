import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Login } from "./Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from "./signup";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/app" component={Login} />
          <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
