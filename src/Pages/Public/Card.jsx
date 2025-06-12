import React, { useEffect, useState } from 'react'
import { GetToken } from '../../Utils/Storage'
import { useNavigate } from 'react-router-dom'

function Card(props) {
  const [cart, setCart] = useState(0)
  const { images, title, description, price } = props
  const token = GetToken()
  const navigate = useNavigate()

  const [selectedData, setData] = useState(() => {
    const cartLocalStorage = JSON.parse(
      localStorage.getItem('selectedData') || '[]'
    )
    return cartLocalStorage
  })

  useEffect(() => {
    localStorage.setItem('selectedData', JSON.stringify(selectedData))
  }, [selectedData])

  useEffect(() => {
    // Set cart count based on cartBox
    const cartBox = JSON.parse(localStorage.getItem('cartBox') || '[]')
    setCart(cartBox.length)
  }, [])

  const handleAdd = () => {
    const newItem = { id, images, title, description, price }
    setData((prev) => [...prev, newItem])
    addToCart(title, description, price)
  }

  const decrementCart = () => {
    if (cart > 0) setCart(cart - 1)
  }

  const incrementCart = () => {
    setCart(cart + 1)
  }

  function addToCart(id, title, description, price) {
    let cartBox = JSON.parse(localStorage.getItem('cartBox') || '[]')

    console.log('=========', addToCart)

    // Check if product already exists
    const existing = cartBox.find((item) => item.title === title)

    if (existing) {
      existing.quantity += 1
    } else {
      cartBox.push({
        id: Date.now(),
        title,
        description,
        price,
        quantity: 1,
      })
    }

    localStorage.setItem('cartBox', JSON.stringify(cartBox))
    setCart(cartBox.length)
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
              onClick={decrementCart}>
              -
            </button>
            <p style={{ padding: '5px' }}>{cart}</p>
            <button
              className="btn btn-neutral btn-outline"
              onClick={incrementCart}>
              +
            </button>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
