import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="change-color">Change Colors</h1>
      <div className="theme-container">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
