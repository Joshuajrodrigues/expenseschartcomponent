import React from "react";

const Total = () => {
  return (
    <div className="grid-container">
      <div className="grid-title">Total this month</div>
      <div className="grid-amount">$478.33</div>
      <div className="sub-amount-container">
        <span className="sub-amount">+2.4%</span>
        <span className="sub-title">from last month</span>
      </div>
    </div>
  );
};

export default Total;
