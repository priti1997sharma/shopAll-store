import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function ShoppingCart() {
  const { id } = useParams()
  const [heading, setHeading] = useState('Add Product')

  const accessToken = localStorage.getItem('accessToken')
  // const navigate = useNavigate()

  //   useEffect(() => {
  //     if (!accessToken) {
  //       navigate('/login')
  //     }
  //   }, [accessToken, navigate])

  const [input, setInput] = useState({
    title: '',
    category: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
  })

  const cartData = {
    items: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 1 },
    ],
    total: 100,
  }

  const [Cart, setCart] = useState([])

  useEffect(() => {
    const cartData = async () => {
      try {
        const response = await axios.post(
          'https://dummyjson.com/carts/add',
          cartData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }.then((response) => {
            console.log('Cart data sent successfully:', response.data)
          })
        )
      } catch (err) {
        console.log(err)
      }
    }

    cartData()
  }, [id])

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       if (!id) return
  //       setHeading('Edit Product')
  //       const response = await axios.get(`https://dummyjson.com/products/${id}`)
  //       console.log(response.data)
  //       setInput((obj) => ({
  //         ...obj,
  //         ...response.data,
  //       }))
  //     } catch (err) {
  //       console.log(err.message)
  //       toast.error(err.message)
  //     }
  //   }

  //   getProduct()
  // }, [id])

  const handleChange = (event) => {
    setInput((old) => {
      return { ...old, [event.target.name]: event.target.value }
      alert('Item deleted successfully')
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const payload = { ...input }

    try {
      if (id) {
        const response = await axios.put(
          `https://dummyjson.com/products/${id}`,
          payload
        )
        console.log(response)
      } else {
        const response = await axios.post(
          'https://dummyjson.com/products/add',
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        console.log(response)
      }
      // navigate('/product')
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = () => {}

  return (
    <div>
      <h1>Shopping Cart</h1>
      <form onSubmit={onSubmit} style={{ border: '1px solid gray' }}>
        <fieldset className="fieldset">
          <label className="label">Product Name</label>
          <input
            type="text"
            className="input"
            placeholder="Product Name"
            name="product_name"
            onChange={handleChange}
          />

          <label className="label">Category</label>
          <input
            type="text"
            className="input"
            placeholder="Category"
            name="category"
            onChange={handleChange}
          />

          <span>
            <button className="btn btn-primary" type="submit">
              +
            </button>
          </span>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <span>
            <button
              className="btn"
              onClick={() => document.getElementById('my_modal_2').showModal()}>
              Delete Item
            </button>
          </span>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Delete</h3>
              <p className="py-4">Are you sure you want to delete this Item?</p>
              <span style={{ padding: '10px' }}>
                <button className="btn btn-primary">Cancel</button>
              </span>

              <span>
                <button className="btn btn-primary" onClick={handleDelete}>
                  Delete
                </button>
              </span>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <div className="toast toast-top toast-end">
            <div className="alert alert-success">
              <span>Deleted Item successfully.</span>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ShoppingCart
