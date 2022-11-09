import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../auth/firebase";
import { AuthContext } from "../../context/AuthContext";
import NavbarStyled, { NavLink, MenuDiv, Btn, Avatar } from "./Navbarstyle";
import avatar from "../../assets/icons/avatar.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <NavbarStyled>
      <div
        style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        React Movie APP
      </div>

      <MenuDiv>
        {currentUser ? (
          <>
            <p style={{ color: "white", fontSize: "1.2rem" }}>
              {currentUser?.displayName}
            </p>
            <Avatar src={avatar} alt="av" />
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
