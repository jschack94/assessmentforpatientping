import React from "react";
import { Route } from "react-router-dom";

import RouteDetail from "../components/RouteDetail";

const routeDetail = () => (
  <Route path="/route-detail/:routeId" component={RouteDetail} />
);

export default routeDetail;
