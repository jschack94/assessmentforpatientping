import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  height: 5rem;
  width: 100%;
  font-size: 3.5rem;
  font-weight: 600;
`;

const Header = () => {
  return <HeaderContainer>Mbta App</HeaderContainer>;
};

export default Header;
