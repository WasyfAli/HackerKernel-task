import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";

import Base from "./core/Reusable/Base";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task" exact component={Base} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
