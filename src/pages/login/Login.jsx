import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser, signIn, signUpWithGoogle } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import LoginStyled from "./Loginstyled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password, navigate);
  };
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };
  return (
    <LoginStyled>
      <div></div>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button>forgot password</button>
          <Link to="/register">Sign Up</Link>

          <br />
          <button>login</button>
          <br />
          <button type="button" onClick={handleGoogleProvider}>
            Continue with google
          </button>
        </form>
      </div>
    </LoginStyled>
  );
};

export default Login;
