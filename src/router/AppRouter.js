import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import MovieDetail from "../pages/moviedetail/MovieDetail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/moviedetail/:id" element={<PrivateRouter />}>
        <Route path="" element={<MovieDetail />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;
