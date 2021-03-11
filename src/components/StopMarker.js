import React from "react";
import styled from "@emotion/styled";

import colors from "../theme/colors";

const MarkerContainer = styled.div`
  border: 0.1rem solid ${colors.gray4};
  background-color: ${colors.white};
  font-size: 1rem;
  display: inline-block;
  border-radius: 0.2rem;
  color: ${colors.gray6};
  padding: 0.5rem 1rem;
`;

const StopMarker = ({ text }) => <MarkerContainer>{text}</MarkerContainer>;

export default StopMarker;
