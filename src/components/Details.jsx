import React from "react";
import Graph from "./Graph";
import Total from "./Total";

const Details = () => {
  return (
    <div className="details-container">
      <span className="details-title">Spending - Last 7 days</span>
      <Graph />
      <hr className="divider" />
      <Total />
    </div>
  );
};

export default Details;
