import { useEffect, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Footer from '../Public/Footer'
import Navbar from '../../Routes/Navbar'

function viewCart() {
  const [open, setOpen] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const cartBox = JSON.parse(localStorage.getItem('cartBox')) || []
    setProducts(cartBox)
  }, [])

  // Remove product from cart
  const handleRemove = (id) => {
    const updated = products.filter((item) => item.id !== id)
    setProducts(updated)
    localStorage.setItem('cartBox', JSON.stringify(updated))
  }
  console.log('-----------------------', handleRemove)

  // Calculate subtotal
  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  console.log('==================', subtotal)

  return (
    <>
      <div>
        <Navbar style={{ backgroungColor: 'white' }} />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-center my-4">Shopping Cart</h1>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className="relative z-10">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-start justify-between">
                  <DialogTitle className="text-lg font-medium text-gray-900">
                    Shopping Cart
                  </DialogTitle>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  {products.length === 0 ? (
                    <p className="text-center text-gray-500">
                      Your cart is empty.
                    </p>
                  ) : (
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200">
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.title}
                                src={product.images[0]}
                                className="h-full w-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{product.title}</h3>
                                  <p className="ml-4">${product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.stock}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Qty: {product.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    onClick={() => handleRemove(product.id)}
                                    className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>

      <Footer />
    </>
  )
}

export default viewCart
