import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import MovieDetail from "../pages/moviedetail/MovieDetail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/moviedetail/" element={<MovieDetail />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;
