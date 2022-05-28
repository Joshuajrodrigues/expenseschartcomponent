import React from "react";
const data = require("../data/data.json");
const dayToday = new Date();

const Graph = () => {
  return (
    <div className="graph-container">
      {data?.map((item, index) => (
        <div className="graph">
          <div className="graph-amount">${item.amount}</div>
          <div
            className={
              dayToday.getDay() === index + 1 ? "today-bar" : "graph-bar"
            }
            style={{
              height: `${item.amount * 3}px`,
            }}
          ></div>
          <span className="graph-day">{item.day}</span>
        </div>
      ))}
    </div>
  );
};

export default Graph;
