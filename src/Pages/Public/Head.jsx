import React from 'react'
import { Link } from 'react-router-dom'

function Head() {
  const ProtectedNavBarList = []

  return (
    <div className="head">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="">About Us</Link>
          </li>

          <li>
            <Link to="">Deals</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Head
