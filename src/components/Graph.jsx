import React from "react";
const data = require("../data/data.json");
const Graph = () => {
  return (
    <div className="graph-container">
      {data?.map((item) => (
        <div>
          <div
            className="graph-bar"
            style={{ height: `${item.amount * 2}px` }}
          ></div>
          <span className="graph-day">{item.day}</span>
        </div>
      ))}
    </div>
  );
};

export default Graph;
