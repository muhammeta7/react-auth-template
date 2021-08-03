import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);
  return (
      <Router>
          <div className="App">
              <div className="wrapper">
                  <h1>Application</h1>
                  <p>You got this login stuff man.</p>
                  <Switch>
                      <Route path="/" exact={true}>
                          <Home />
                      </Route>
                      {/*<Route path="/dashboard">*/}
                      {/*  <Dashboard />*/}
                      {/*</Route>*/}
                      {/*<Route path="/preferences">*/}
                      {/*  <Preferences />*/}
                      {/*</Route>*/}
                  </Switch>
              </div>
          </div>
      </Router>

  );
}

export default App;
