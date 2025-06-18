// routes/protectedRoutes.ts
import { Navigate } from 'react-router-dom'
import NotFound from '../Public/NotFound'
import Profile from './Profile'
import Product from './Product'
import Home from '../Public/Home'
import Login from '../Auth/Login'
import Logout from '../Auth/Logout'

import UpdateProduct from './UpdateProduct'
import ViewCart from './ViewCart'
import Navbar from '../../Routes/Navbar'
import Footer from '../Public/Footer'

export const ProtectedRoutes = [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> }, // use `index` instead of repeating path: '/'
      { path: 'profile', element: <Profile /> },
      { path: 'navbar', element: <Navbar /> },
      { path: 'login', element: <Login /> },
      { path: 'viewCart', element: <ViewCart /> },
      { path: 'updateProduct', element: <UpdateProduct /> },
      { path: 'product', element: <Product /> },
      { path: 'profile', element: <Profile /> },
      { path: 'Footer', element: <Footer /> },

      { path: 'logout', element: <Logout /> },
      { path: 'not-found', element: <NotFound /> },
      { path: '*', element: <Navigate to="/not-found" /> },
    ],
  },
]
