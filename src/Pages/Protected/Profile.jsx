function Profile() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="src/assest/male-face-avatar-on-white-260nw-562359640.webp"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-primary shadow-md mb-4"
        />
        <h2 className="text-2xl font-semibold text-white-800">My Profile</h2>
        <p className="text-white-500 text-sm">Manage your account</p>
      </div>

      {/* Profile title */}
      <div className="bg-grey rounded-xl shadow-lg p-4 space-y-3">
        {[
          'Edit Profile',
          'Shopping Address',
          'Order History',
          'Wishlist',
          'Notification',
          'Cart',
          'Account',
        ].map((title) => (
          <div
            key={title}
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 rounded-box">
            <div className="collapse-title font-medium text-base-content">
              {title}
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
