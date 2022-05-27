import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="balance">
        <span>My balance</span>
        <span> $921.48</span>
      </div>

      <img src="/images/logo.svg" alt="logo" />
    </div>
  );
};

export default Header;
