import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser, signIn, signUpWithGoogle } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import LoginStyled, { Btn, CardImg, Input, Signin } from "./Loginstyled";
import GoogleIcons from "../../assets/icons/GoogleIcon";

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
      <div>
        <CardImg
          src="https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="
          alt="#"
        />
      </div>
      <Signin>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
          <Btn>login</Btn>
          <br />
          <br />
          <GoogleIcons onClick={handleGoogleProvider} />
        </form>
      </Signin>
    </LoginStyled>
  );
};

export default Login;
