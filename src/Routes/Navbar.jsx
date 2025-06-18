import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProtectedNavBarList } from '../Pages/Protected/NavbarList'
import { PublicNavBarList } from '../Pages/Public/NavBarList'

import { GetToken } from '../Utils/Storage'
import { useAppContext } from '../Utils/AppContext'

function Navbar({ navCartCount }) {
  const token = GetToken()
  const CommonNavBarList = []
  const { cartitem, theme } = useAppContext()
  let AllNavBarList = []
  if (token) {
    AllNavBarList = [...ProtectedNavBarList]
  } else {
    AllNavBarList = [...PublicNavBarList]
  }
  AllNavBarList = [...AllNavBarList, ...CommonNavBarList]

  const [totalItem, setTotalItem] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = cartitem?.reduce((sum, item) => sum + item.quantity, 0) || 0
    const totalAmount =
      cartitem?.reduce((sum, item) => sum + item.quantity * item.price, 0) || 0
    setTotalItem(total)
    setTotalPrice(totalAmount)
  }, [cartitem])

  console.log({ theme, navCartCount, cartitem, totalItem })

  const navigate = useNavigate()

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">SHOP~ALL</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{' '}
              </svg>
              <span className="badge badge-sm indicator-item">
                {/* {navCartCount} */}
                {totalItem || 0}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{totalItem || 0}</span>
              <span className="text-info">Subtotal: $ ({totalPrice})</span>
              <div className="card-actions">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    navigate('/viewCart')
                  }}>
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {/* put into public and private */}

            {AllNavBarList.map((navBarObj, index) => (
              <li key={index}>
                <Link to={navBarObj.link}>{navBarObj.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
