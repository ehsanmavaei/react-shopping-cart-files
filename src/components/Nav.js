import React from "react";
import { GrCart, GrUser } from "react-icons/gr";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="menu">
        <GrCart className="icon cart" />
        <div className="amount">3</div>
      </div>
    </nav>
  );
};

export default Nav;
