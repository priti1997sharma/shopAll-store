import React, { useState, useEffect } from 'react'

function Profile() {
  const [user, setUser] = useState({ name: '', email: '', number: '' })
  const [showModal, setShowModal] = useState(false)
  const [addressModalOpen, setAddressModalOpen] = useState(false)
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    state: '',
  })
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('addresses')) || []
    setAddresses(saved)
    const stored = JSON.parse(localStorage.getItem('userProfile'))
    if (stored) setUser(stored)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(user))
    setShowModal(false)
  }

  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setNewAddress((prev) => ({ ...prev, [name]: value }))
  }

  const saveAddress = () => {
    const updated = [...addresses, newAddress]
    localStorage.setItem('addresses', JSON.stringify(updated))
    setAddresses(updated)
    setNewAddress({ name: '', address: '', city: '', zipCode: '', state: '' })
    setAddressModalOpen(false)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center mb-8">
        <img
          src="src/assest/male-face-avatar-on-white-260nw-562359640.webp"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-primary shadow-md mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
        <p className="text-gray-500 text-sm">Manage your account</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 space-y-3">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-300 rounded-box">
          <div
            className="collapse-title font-medium text-gray-800"
            onClick={() => setShowModal(true)}>
            ✏️ Edit Profile
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Update your name, email, and avatar.
          </div>
        </div>

        {[
          { title: 'Shopping Address', icon: '🏠' },
          { title: 'Order History', icon: '📦' },
          { title: 'Wishlist', icon: '❤️' },
          { title: 'Notification', icon: '🔔' },
          { title: 'Cart', icon: '🛒' },
          { title: 'Account', icon: '⚙️' },
        ].map(({ title, icon }) => (
          <div
            key={title}
            className="collapse collapse-arrow border border-gray-300 rounded-box">
            <div className="collapse-title font-medium text-gray-800">
              {icon} {title}
            </div>
            <div className="collapse-content text-sm text-gray-600">
              {title === 'Shopping Address' && (
                <>
                  <button
                    onClick={() => setAddressModalOpen(true)}
                    className="mb-2 text-indigo-600 hover:underline text-sm">
                    ➕ Add New Address
                  </button>
                  {addresses.length === 0 && <p>No saved addresses yet.</p>}
                  {addresses.map((addr, index) => (
                    <div key={index} className="p-3 border rounded bg-gray-50">
                      <p className="font-medium">{addr.name}</p>
                      <p>
                        {addr.address}, {addr.city}
                      </p>
                      <p>
                        {addr.zipCode}, {addr.state}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => {
            localStorage.clear()
            alert('Account data cleared. You have been logged out.')
            window.location.reload()
          }}
          className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded">
          🔓 Logout / Clear Account
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Edit Profile
            </h3>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full mb-3 p-2 border rounded text-black"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full mb-3 p-2 border rounded text-black"
            />
            <input
              type="text"
              name="number"
              value={user.number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full mb-4 p-2 border rounded text-black"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {addressModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg text-black">
            <h3 className="text-lg font-bold mb-4">Add New Address</h3>
            <input
              name="name"
              value={newAddress.name}
              onChange={handleAddressChange}
              placeholder="Full Name"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              name="address"
              value={newAddress.address}
              onChange={handleAddressChange}
              placeholder="Street / Building"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              name="city"
              value={newAddress.city}
              onChange={handleAddressChange}
              placeholder="City"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              name="zipCode"
              value={newAddress.zipCode}
              onChange={handleAddressChange}
              placeholder="Zip Code"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              name="state"
              value={newAddress.state}
              onChange={handleAddressChange}
              placeholder="State"
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setAddressModalOpen(false)}
                className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
                Cancel
              </button>
              <button
                onClick={saveAddress}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
