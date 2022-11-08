import React from "react";
import { useState } from "react";
import { createUser } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
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
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
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
        <button>register</button>
        <br />
        <button type="button">continue with google</button>
      </form>
    </div>
  );
};

export default Register;
