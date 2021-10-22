import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
