import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import getStops from "../services/getStops";
import getAlerts from "../services/getAlerts";

import Stops from "./Stops";
import Alerts from "./Alerts";
import Routes from "./Routes";

import getRoutes from "../services/getRoutes";
import { setRoutes } from "../redux/actions";

const ContainerDiv = styled.div`
  display: flex;
`;

const Home = ({ routes }) => {
  const [alerts, setAlerts] = useState([]);
  const [stops, setStops] = useState([]);
  const [currentId, setCurrentId] = useState([]);

  useEffect(() => {
    getRoutes().then(data => {
      setRoutes(data);
    });
  }, []);

  const handleRouteChange = id => {
    setCurrentId(id);
    getStops(id).then(newStops => setStops(newStops));
    getAlerts(id).then(newAlerts => setAlerts(newAlerts));
  };

  return (
    <ContainerDiv>
      <Routes
        routes={routes}
        routeClick={handleRouteChange}
        currentId={currentId}
      />
      <Stops stops={stops} routeId={currentId} />
      <Alerts alerts={alerts} />
    </ContainerDiv>
  );
};

export default Home;
