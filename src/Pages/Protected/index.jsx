// routes/protectedRoutes.ts
import { Navigate } from 'react-router-dom'
import NotFound from '../Public/NotFound'
import Profile from './Profile'
import Product from './Product'
import Home from '../Public/Home'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import CreateProduct from './CreateProduct'

export const ProtectedRoutes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> }, // use `index` instead of repeating path: '/'
      { path: 'profile', element: <Profile /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },

      { path: 'product', element: <Product /> },
      { path: 'createProduct', element: <CreateProduct /> },
      { path: 'not-found', element: <NotFound /> },
      { path: '*', element: <Navigate to="/not-found" /> },
    ],
  },
]
