import React from "react";

import { Switch, Route } from "react-router-dom";

import Search from "../pages/search";
import View from "../pages/view";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/view/:username" component={View} />
    </Switch>
  );
};
