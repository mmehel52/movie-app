import React from "react";
import { useState } from "react";
import { createUser, signUpWithGoogle } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import RegisterStyled, { Btn, Input } from "./RegisterStyled";
import GoogleIcons from "../../assets/icons/GoogleIcon";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);

    console.log(firstName, lastName);
  };
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };
  return (
    <RegisterStyled>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <Input
          type="text"
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Btn>register</Btn>
        <br />
        <br />
        <GoogleIcons
          onClick={handleGoogleProvider}
          style={{ cursor: "pointer" }}
        />
      </form>
    </RegisterStyled>
  );
};

export default Register;
