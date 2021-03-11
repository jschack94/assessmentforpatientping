import React from "react";
import styled from "@emotion/styled";

const AlertsUl = styled.ul`
  && {
    display: block;
    margin-bottom: 2rem;
  }
`;

const Alerts = ({ alerts }) => {
  return (
    <div>
      <span className="heading">{`${alerts.length} Alert${
        alerts.length === 1 ? "" : "s"
      }`}</span>
      <AlertsUl className="alerts">
        {alerts.map(alert => (
          <li
            style={{ height: "auto !important", marginBottom: "1rem" }}
            key={alert.id}
          >{`${alert.attributes.service_effect}: ${
            alert.attributes.description
          }`}</li>
        ))}
      </AlertsUl>
    </div>
  );
};

export default Alerts;
