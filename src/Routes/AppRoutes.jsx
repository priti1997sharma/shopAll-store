import { Navigate, useRoutes } from "react-router-dom";
import { PublicRoutes } from "../Pages/Public/index.jsx";
import { ProtectedRoutes } from "../Pages/Protected/index.jsx";
import NotFound from "../Pages/Public/NotFound.jsx";


import {GetToken} from "../Utils/Storage.js";
import About from "../Pages/Public/About.jsx";
import Home from "../Pages/Public/Home.jsx";

export const AppRoutes = () => {
  const token = GetToken();
  console.log(token)

  const commonRoutes = [
    { path: "/", element: <NotFound /> },
    { path: "*", element: <Navigate to="/" /> },
    { path: 'about', element: <About /> },
    { path: 'home', element: <Home /> },

  ]; // These are routes which are accessible  , with or without token

  let allRoutes = [];

  if (token) {
    allRoutes = [...ProtectedRoutes];
  } else {
    allRoutes = [...PublicRoutes];
  }
  

  allRoutes = [...allRoutes, ...commonRoutes];
  
  console.log({allRoutes});
  const element = useRoutes(allRoutes);

  return <>{element}</>;
};
