import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

import Home from "./routes/home";
import RouteDetail from "./routes/route-detail";
import colors from "./theme/colors";

const ContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-columns: 1fr;
  max-width: 80rem;
  margin: 0 auto;
  box-shadow: 0px 0px 2rem 0 ${colors.gray4};
  padding: 1rem;
  height: 100vh;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: inline-block;
    li {
      cursor: default;
    }
  }
`;

const BodyContent = styled.div``;

function App() {
  return (
    <Router>
      <ContainerDiv>
        <Header />

        <BodyContent>
          <Home />
          <RouteDetail />
        </BodyContent>
      </ContainerDiv>
    </Router>
  );
}

export default App;
