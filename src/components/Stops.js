import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StopsContainer = styled.div`
  min-width: 15rem;
`;

const StopsUl = styled.ul`
  && {
    display: block;
    margin-bottom: 2rem;
  }
`;

const StopLI = styled.li`
  && {
    height: 3.5rem;
    width: 15rem;
  }
`;

const ShowStops = ({ stops, routeId }) => {
  const renderHeader = () => {
    if (stops && stops.length > 0) {
      return (
        <Link to={`/route-detail/${routeId}`}>
          <span className="heading">{`${stops.length} Stop${
            stops.length === 1 ? "" : "s"
          }`}</span>
        </Link>
      );
    } else {
      return (
        <span className="heading">{`${stops.length} Stop${
          stops.length === 1 ? "" : "s"
        }`}</span>
      );
    }
  };

  return (
    <StopsContainer>
      {renderHeader()}
      <StopsUl className="stops">
        {stops.map(stop => (
          <StopLI key={stop.id}>{stop.attributes.name}</StopLI>
        ))}
      </StopsUl>
    </StopsContainer>
  );
};

export default ShowStops;
