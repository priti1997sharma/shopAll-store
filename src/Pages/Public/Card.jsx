import React from 'react'
import { useAppContext } from '../../Utils/AppContext'

function Card(props) {
  const { id, images, title, description, price } = props

  const { cartitem, setCartItem } = useAppContext()

  const isInCart = cartitem?.some((item) => item.id === id)
  const setCartToLocalStorage = (cart) => {
    localStorage.setItem('cartBox', JSON.stringify(cart))
  }
  const incrementCart = (productId) => {
    const updatedCart = cartitem.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCartItem(updatedCart)
  }

  const decrementCart = (productId) => {
    const item = cartitem.find((i) => i.id === productId)
    if (item.quantity <= 1) {
      setCartItem(cartitem.filter((i) => i.id !== productId))
    } else {
      const updatedCart = cartitem.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      setCartItem(updatedCart)
    }
  }

  const handleAddToCart = () => {
    const selectedProduct = {
      id,
      images,
      title,
      description,
      price,
      quantity: 1,
    }
    const cartProducts = [...cartitem, selectedProduct]
    console.log('=================', cartProducts)
    setCartItem(cartProducts)
    setCartToLocalStorage(cartProducts)
  }

  console.log('Cart item ------------', cartitem)

  const product = cartitem.find((item) => item.id === id)
  const currentQty = product?.quantity || 1

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

          {isInCart ? (
            <div
              className="card-actions justify-center"
              style={{ border: '1px solid grey' }}>
              <button
                className="btn btn-neutral btn-outline"
                onClick={() => decrementCart(id)}>
                -
              </button>
              <p style={{ padding: '10px', textAlign: 'center' }}>
                {currentQty}
              </p>
              <button
                className="btn btn-neutral btn-outline"
                onClick={() => incrementCart(id)}>
                +
              </button>
            </div>
          ) : (
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
