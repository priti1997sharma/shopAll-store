import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProtectedNavBarList } from '../Pages/Protected/NavbarList'
import { PublicNavBarList } from '../Pages/Public/NavBarList'
import { GetToken } from '../Utils/Storage'
import { useAppContext } from '../Utils/AppContext'

function Navbar({ navCartCount }) {
  const token = GetToken()

  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)
  // const [searchQuery, setSearchQuery] = useState('')

  const {
    cartitem,
    searchQuery,
    setSearchQuery,
    productList,
  } = useAppContext()

  const [totalItem, setTotalItem] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const AllNavBarList = token ? [...ProtectedNavBarList] : [...PublicNavBarList]

  useEffect(() => {
    const total = cartitem?.reduce((sum, item) => sum + item.quantity, 0) || 0
    const totalAmount =
      cartitem?.reduce((sum, item) => sum + item.quantity * item.price, 0) || 0
    setTotalItem(total)
    setTotalPrice(totalAmount)
  }, [cartitem])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const filtered = productList.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  console.log(filtered)

  return (
    <div className="bg-purple-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/home" className="text-2xl font-bold text-primary">
            SHOP~ALL
          </Link>
        </div>

        {/* Center Navigation or Search */}
        <div className="hidden md:flex items-center space-x-6">
          {showSearch ? (
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-[300px] shadow">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-1 outline-none text-gray-700 bg-transparent"
              />
              <button onClick={() => setShowSearch(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 hover:text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-6 bg-white pt-2 pr-4 pb-2 pl-6 rounded-3xl">
              <Link
                to="/home"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium">
                About Us
              </Link>
              <Link
                to="/deals"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Deals
              </Link>
              <Link
                to="/product"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Products
              </Link>

              {/* Search Icon */}
              <button
                onClick={() => setShowSearch(true)}
                className="text-gray-600 hover:text-blue-600">
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
                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1118 9a7.5 7.5 0 01-1.35 7.65z"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Cart + Profile */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {totalItem || 0}
                </span>
              </div>
            </div>
            <div className="dropdown-content card card-compact mt-3 w-56 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{totalItem} Items</span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => navigate('/viewCart')}>
                    View Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Avatar */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {AllNavBarList.map((navBarObj, index) => (
                <li key={index}>
                  <Link to={navBarObj.link}>{navBarObj.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
