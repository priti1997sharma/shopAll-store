import React, { useEffect, useState } from 'react'
import { GetToken } from '../../Utils/Storage'
import { useNavigate } from 'react-router-dom'

function Card(props) {

  const { id, images, title, description, price, quantity, incrementCart, decrementCart } = props
  
const navigate =useNavigate();
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={images} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>

          <p>
            <strong>Price:</strong> ${price}
          </p>

          <div
            className="card-actions justify-center"
            style={{ border: '1px solid grey' }}>
            <button
              className="btn btn-neutral btn-outline"
              onClick={() => {
                decrementCart(id, images, title, description, price )
              }}>
              -
            </button>
            <p style={{ padding: '10px', textAlign: 'center' }}>{quantity || 0}</p>
            <button
              className="btn btn-neutral btn-outline"
              onClick={() => {
                incrementCart(id, images, title, description, price )
              }}>
              +
            </button>
          </div>

          <div className="card-actions justify-center">
            {/* <button className="btn btn-primary" onClick={() => {
                handleAdd(id, images, title, description, price )
              }
            }>
              Add to Cart
            </button> */}

<button className="btn btn-primary" onClick={() => {

                navigate("/shoppingCart")
              }
            }>
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card