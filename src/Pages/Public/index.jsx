// publicRoutes.ts
import { Navigate } from 'react-router-dom'
// import Home from "./Home"
import Register from '../Auth/Register'
import Login from '../Auth/Login'

import NotFound from './NotFound'
import Home from './Home'
import Footer from './Footer'
import Navbar from '../../Routes/Navbar'
import Card from './Card'
import Head from './Head'
import About from './About'
// import About from '../About'

export const PublicRoutes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> }, // Home on '/'
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'navbar', element: <Navbar /> },
      { path: 'head', element: <Head /> },
      { path: 'card', element: <Card /> },
      { path: 'footer', element: <Footer /> },

      { path: 'not-found', element: <NotFound /> },
      { path: '*', element: <Navigate to="/not-found" /> },
      { path: 'about', element: <About /> },
    ],
  },
]
