import { useEffect, useState } from 'react'
import Footer from '../Public/Footer'
import Navbar from '../../Routes/Navbar'
import { Navigate } from 'react-router-dom'

function ViewCart() {
  const [products, setProducts] = useState([])
  const [obj, setObj] = useState({
    name: '',
    lastName: '',
    number: '',
    address: '',
    landmark: '',
    city: '',
    zipCode: '',
    cstate: '',
  })

  useEffect(() => {
    const cartBox = JSON.parse(localStorage.getItem('cartBox')) || []
    setProducts(cartBox)
  }, [])

  const handleRemove = (id) => {
    const updated = products.filter((item) => item.id !== id)
    setProducts(updated)
    localStorage.setItem('cartBox', JSON.stringify(updated))
  }

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  // Load data from local storage on component mount

  useEffect(() => {
    const storedFormData = localStorage.getItem('myForm')
    if (storedFormData) {
      setObj(JSON.parse(storedFormData))
    }
  }, [])

  // Handle input changes and update state

  const handleUpdate = (e) => {
    const { name, value } = e.target

    setObj((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // save data into local storage
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('myForm', JSON.stringify(obj))
    alert('Form data saved to local storage!')
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Shipping Form Section */}
          <div className="bg-black rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={obj.name}
                    onChange={handleUpdate}
                    className="mt-1 block w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={obj.lastName}
                    onChange={handleUpdate}
                    className="mt-1 block w-full  border rounded-md p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Phone No.</label>
                <input
                  type="number"
                  name="number"
                  value={obj.number}
                  onChange={handleUpdate}
                  className="mt-1 block w-full  border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Building / Street No.
                </label>
                <input
                  type="text"
                  name="address"
                  value={obj.address}
                  onChange={handleUpdate}
                  className="mt-1 block w-full  border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  value={obj.landmark}
                  onChange={handleUpdate}
                  className="mt-1 block w-full  border rounded-md p-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={obj.city}
                    onChange={handleUpdate}
                    className="mt-1 block w-full  border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium  text-grey-200">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={obj.zipCode}
                    onChange={handleUpdate}
                    className="mt-1 block w-full  border rounded-md p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-grey-200">
                  State
                </label>
                <input
                  type="text"
                  name="cstate"
                  value={obj.cstate}
                  onChange={handleUpdate}
                  className="mt-1 block w-full  border rounded-md p-2"
                />
              </div>

              <button
                type="submit"
                className=" mt-3 w-full bg-indigo-600 text-white text-xl font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
                Save
              </button>
            </form>
          </div>

          {/* Cart Items Section */}
          <div className="bg-grey rounded-lg shadow-md p-6">
            {products.length === 0 ? (
              <p className="text-center text-black-700 text-xl font-semibold">
                Your cart is empty.
              </p>
            ) : (
              <ul className="divide-y divide-gray-300">
                <h1 className="text-center text-2xl font-semibold text-black pb-5 ">
                  Order Summary
                </h1>
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
                      <img
                        alt={product.title}
                        src={product.images[0]}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.title}</h3>
                          <p className="ml-4">${product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          In stock: {product.stock}
                        </p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <p>Qty: {product.quantity}</p>
                        <button
                          onClick={() => handleRemove(product.id)}
                          className="text-indigo-600 hover:text-indigo-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {products.length > 0 && (
              <div className="mt-6 text-right">
                <p className="text-xl font-semibold text-black  ">
                  Subtotal : {''}
                  <span className="text-indigo-600">
                    ${subtotal.toFixed(2)}
                  </span>
                </p>
              </div>
            )}

            <button
              // onClick={handSubmit}
              type="submit"
              className=" mt-5 w-full bg-indigo-600 text-white text-xl font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition position-fixed">
              Palce Your Order
            </button>
          </div>
        </div>

        <div></div>
      </div>
      <Footer />
    </>
  )
}

export default ViewCart
