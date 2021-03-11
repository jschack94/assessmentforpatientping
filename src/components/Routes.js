import React from "react";
import styled from "@emotion/styled";
import classnames from "classnames";
import colors from "../theme/colors";

const RoutesUl = styled.ul`
  && {
    color: ${colors.cta};
    border: 0.1rem solid ${colors.gray4};
    border-bottom: 0;
    display: block;
    margin-right: 1.5rem;
  }
`;

const RouteLI = styled.li`
  && {
    border-bottom: 0.1rem solid ${colors.gray4};
    padding: 0.5rem;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    max-width: 20rem;
    text-overflow: ellipsis;
    &:hover {
      color: ${colors.white};
      background-color: ${colors.cta};
    }
    &.active {
      color: ${colors.cta};
      background-color: ${colors.primary1};
    }
  }
`;

const Routes = ({ routes, routeClick, currentId }) => {
  const handleRouteClick = route => () => {
    routeClick(route.id);
  };

  if (!routes) {
    return null;
  }

  return (
    <div>
      <span className="heading">{`${routes.length} Route${
        routes.length === 1 ? "" : "s"
      }`}</span>
      <RoutesUl className="Routes">
        {routes.map(route => (
          <RouteLI
            titel={route.attributes.long_name}
            className={classnames({ active: route.id === currentId })}
            onClick={handleRouteClick(route)}
            key={route.id}
          >{`${route.attributes.long_name}`}</RouteLI>
        ))}
      </RoutesUl>
    </div>
  );
};

export default Routes;
