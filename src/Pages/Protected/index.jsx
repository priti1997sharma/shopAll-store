// routes/protectedRoutes.ts
import { Navigate } from 'react-router-dom'
import NotFound from '../Public/NotFound'
import Profile from './Profile'
import Product from './Product' 
import Home from '../Public/Home'
import Login from '../Auth/Login'
import Logout from '../Auth/Logout'
import CreateProduct from './CreateProduct'

export const ProtectedRoutes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> }, // use `index` instead of repeating path: '/'
      { path: 'profile', element: <Profile /> },
      { path: 'login', element: <Login /> },
      { path: 'createProduct', element: <CreateProduct /> },
      { path: 'product-list', element: <Product /> },
      { path: 'logout', element: <Logout /> },
      { path: 'not-found', element: <NotFound /> },
      { path: '*', element: <Navigate to="/not-found" /> },
    ],
  },
]
