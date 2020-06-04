import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./Containers/Dashboard";

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/">
                <Dashboard />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
