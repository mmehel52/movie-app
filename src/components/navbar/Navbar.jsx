import React, { useContext } from "react";
import { logOut } from "../../auth/firebase";
import { AuthContext } from "../../context/AuthContext";
import NavbarStyled, { NavLink, MenuDiv, Btn } from "./Navbarstyle";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <NavbarStyled>
      <div style={{ color: "white", fontSize: "25px" }}>React Movie APP</div>

      <MenuDiv>
        {currentUser ? (
          <>
            <p style={{ color: "white", fontSize: "1.5rem" }}>
              {currentUser?.email.slice(0, 5)}
            </p>
            <NavLink onClick={() => logOut()}>Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </MenuDiv>
    </NavbarStyled>
  );
};

export default Navbar;
