import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
  const { id } = useParams()
  const [heading, setHeading] = useState('Add Product')

  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()

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

  useEffect(() => {
    const getProduct = async () => {
      try {
        if (!id) return
        setHeading('Edit Product')
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log(response.data)
        setInput((obj) => ({
          ...obj,
          ...response.data,
        }))
      } catch (err) {
        console.log(err.message)
        toast.error(err.message)
      }
    }

    getProduct()
  }, [id])

  const handleChange = (event) => {
    setInput((old) => {
      return { ...old, [event.target.name]: event.target.value }
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
      navigate('/product')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Add Product</h1>
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

          <label className="label">Price</label>
          <input
            type="text"
            className="input"
            placeholder=""
            name="price"
            onChange={handleChange}
          />

          <label className="label">Discount</label>
          <input
            type="text"
            className="input"
            placeholder=""
            name="discount"
            onChange={handleChange}
          />

          <label className="label">Rating</label>
          <input
            type="text"
            className="input"
            placeholder=""
            name="rating"
            onChange={handleChange}
          />

          <label className="label">Stock</label>
          <input
            type="text"
            className="input"
            placeholder=""
            name="stock"
            onChange={handleChange}
          />

          <span>
            <button className="btn btn-primary" type="submit">
              ADD
            </button>
          </span>
        </fieldset>
      </form>
    </div>
  )
}

export default CreateProduct
