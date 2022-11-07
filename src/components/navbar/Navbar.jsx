import React, { Component } from "react";

import { useState } from "react";
import NavbarStyled, { NavLink, HamburgerMenu, MenuDiv } from "./Navbarstyle";

// import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <NavbarStyled>
      <div style={{ color: "white", fontSize: "25px" }}>React Movie APP</div>

      <MenuDiv>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </MenuDiv>
    </NavbarStyled>
  );
};

export default Navbar;
