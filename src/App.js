import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './Routes'


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route) => (
            <Route
              key={ route.path }
              path={ route.path }
              component={ route.component }
              exact={ route.exact }
            />
          ))}
        </Switch>   
      </div>
    </Router>
  );
}
