import { useEffect, useRef, useState } from 'react'
import Footer from '../Public/Footer'
import Navbar from '../../Routes/Navbar'

function ViewCart() {
  const [products, setProducts] = useState([])

  // Create refs for each input field
  const nameRef = useRef()
  const lastNameRef = useRef()
  const numberRef = useRef()
  const addressRef = useRef()
  const landmarkRef = useRef()
  const cityRef = useRef()
  const zipCodeRef = useRef()
  const cstateRef = useRef()

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

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      number: numberRef.current.value,
      address: addressRef.current.value,
      landmark: landmarkRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
      cstate: cstateRef.current.value,
    }

    localStorage.setItem('myForm', JSON.stringify(formData))
    alert('Form data saved to local storage!')

    // Clear form after submit
    nameRef.current.value = ''
    lastNameRef.current.value = ''
    numberRef.current.value = ''
    addressRef.current.value = ''
    landmarkRef.current.value = ''
    cityRef.current.value = ''
    zipCodeRef.current.value = ''
    cstateRef.current.value = ''
  }

  const handleClick = () => {
    localStorage.removeItem('myForm')

    // Clear input fields
    nameRef.current.value = ''
    lastNameRef.current.value = ''
    numberRef.current.value = ''
    addressRef.current.value = ''
    landmarkRef.current.value = ''
    cityRef.current.value = ''
    zipCodeRef.current.value = ''
    cstateRef.current.value = ''
  }

  const handlepayment =()=>{
    
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-black">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Shipping Form */}
          <div className="bg-black rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Shipping Details
              </h2>
              <button className="btn btn-neutral text-lg" onClick={handleClick}>
                Clear
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="First Name"
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  ref={lastNameRef}
                  type="text"
                  placeholder="Last Name"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <input
                ref={numberRef}
                type="text"
                placeholder="Phone Number"
                className="w-full border p-2 rounded"
                required
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                maxLength={10}
              />
              <input
                ref={addressRef}
                type="text"
                placeholder="Street / Building"
                className="w-full border p-2 rounded"
                required
              />
              <input
                ref={landmarkRef}
                type="text"
                placeholder="Landmark"
                className="w-full border p-2 rounded"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  ref={cityRef}
                  type="text"
                  placeholder="City"
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  ref={zipCodeRef}
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full border p-2 rounded"
                  required
                  maxLength={6}
                  onKeyPress={(e) => {
                    if (!/[0-5]/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              </div>

              <input
                ref={cstateRef}
                type="text"
                placeholder="State"
                className="w-full border p-2 rounded"
                required
              />

              <button
                type="submit"
                className="w-full mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Save
              </button>
            </form>
          </div>

          {/* Cart Section (unchanged) */}
          <div className="bg-white rounded-lg shadow-md p-6">
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
                <p className="text-xl font-semibold text-black">
                  Subtotal:{' '}
                  <span className="text-indigo-600">
                    ${subtotal.toFixed(2)}
                  </span>
                </p>
              </div>
            )}

            <button
              type="submit"
              onClick={handlepayment}
              className="mt-5 w-full bg-indigo-600 text-white text-xl font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
              Proceed with payment...
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewCart
