import React, { useRef, useEffect } from 'react'
import Navbar from '../../Routes/Navbar'
import Footer from '../Public/Footer'
import { Link } from 'react-router-dom'

function Payment() {
  // Create refs for each input field
  const nameRef = useRef()
  const card_numberRef = useRef()
  const cvvRef = useRef()
  const exp_DateRef = useRef()

  useEffect(() => {}, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      name: nameRef.current.value,

      card_number: card_numberRef.current.value,

      cvv: cvvRef.current.value,
      exp_Date: exp_DateRef.current.value,
    }

    localStorage.setItem('myForm', JSON.stringify(formData))
    alert('Form data saved to local storage!')

    // Clear form after submit
    nameRef.current.value = ''
    card_numberRef.current.value = ''
    cvvRef.current.value = ''
    exp_DateRef.current.value = ''
  }

  const handleClick = () => {
    localStorage.removeItem('myForm')

    // Clear input fields
    nameRef.current.value = ''
    card_numberRef.current.value = ''
    cvvRef.current.value = ''
    exp_DateRef.current.value = ''
  }

  const handlepayment = () => {}

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-black">
          Billing and Payments
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Shipping Form */}
          <div className="bg-black rounded-lg shadow-md p-6">
            <img
              src="src/assest/black-credit-card_1017-6276.avif"
              style={{
                borderRadius: '10px',
                margin: '5px',
                padding: '5px',
              }}></img>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Enter Card Details
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
                  placeholder="Name on card"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <input
                ref={card_numberRef}
                type="text"
                placeholder="Card Number"
                className="w-full border p-2 rounded"
                required
                onKeyPress={(e) => {
                  if (!/[0-11]/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                maxLength={12}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  ref={exp_DateRef}
                  type="text"
                  placeholder="Exp Date"
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  ref={cvvRef}
                  type="text"
                  placeholder="CVV"
                  className="w-full border p-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Save
              </button>
            </form>
          </div>

          {/* Cart Section (unchanged) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-center text-black mb-6">
              Choose the Payment Method
            </h2>

            <div className="space-y-4">
              {/* PayPal */}
              <div className="flex items-center border rounded-md p-4 hover:shadow-lg transition">
                <img
                  src="src/assest/PayPal-Logo-History-1.png"
                  alt="PayPal"
                  className="w-20 h-auto mr-4"
                />
                <Link to="https://www.paypal.com/in/home?_sessionID=QkOD_mU2cJTE7PTx-H2w_avlSbdyDTd8&Z3JncnB0=">
                  <h3 className="text-lg font-medium text-black">PayPal</h3>
                </Link>
              </div>

              {/* Google Pay */}
              <div className="flex items-center border rounded-md p-4 hover:shadow-lg transition">
                <img
                  src="src/assest/Google-Pay-India-Tez-new-icon.avif"
                  alt="GPay"
                  className="w-20 h-auto mr-4"
                />
                <h3 className="text-lg font-medium text-black">Google Pay</h3>
              </div>

              {/* Apple Pay / Card */}
              <div className="flex items-center border rounded-md p-4 hover:shadow-lg transition">
                <img
                  src="src/assest/apple-pay.png"
                  alt="Apple Pay"
                  className="w-16 h-auto mr-4"
                />
                <h3 className="text-lg font-medium text-black">Apple Pay</h3>
              </div>
            </div>

            <button
              type="submit"
              onClick={handlepayment}
              className="mt-6 w-full bg-indigo-600 text-white text-xl font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
              Proceed with Payment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Payment
