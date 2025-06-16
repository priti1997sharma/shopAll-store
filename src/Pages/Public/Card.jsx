import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Utils/AppContext'

function Card(props) {
  const {
    id,
    images,
    title,
    description,
    price,
    quantity,
    incrementCart,
    decrementCart,
  } = props

  const { cartitem, setCartItem } = useAppContext()
  const navigate = useNavigate()

  // add to cart functionality (set data in an array)

  const handleAddToCart = () => {
    // let storeProducts = JSON.parse(localStorage.getItem('storeProducts')) || []
    let storedProducts = cartitem || []

    console.log({ storedProducts })
    let selectedProduct = {
      id,
      images,
      title,
      description,
      price,
      quantity,
    }
    setCartItem([...cartitem, selectedProduct])
    // storedProducts.push(selectedProduct)

    // // localStorage.setItem('Addproducts', JSON.stringify(storeProducts))
    // setCartItem(storedProducts)
    // console.log('carttttttttttttttttt', cartitem)
  }

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
              onClick={() =>
                decrementCart(id, images, title, description, price)
              }>
              -
            </button>
            <p style={{ padding: '10px', textAlign: 'center' }}>
              {quantity || 0}
            </p>
            <button
              className="btn btn-neutral btn-outline"
              onClick={() =>
                incrementCart(id, images, title, description, price)
              }>
              +
            </button>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
