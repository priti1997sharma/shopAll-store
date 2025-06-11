function Profile() {
  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="src/assest/U.profile.jpeg" alt="" className="userProfile" />
        </div>
        <div className="row">
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">Edit Profile</div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
            </li>

            <li>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">
                  Shopping Address
                </div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
            </li>

            <li>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">
                  Order History
                </div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
            </li>

            <li>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">Whishlist</div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
            </li>

            <li>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">Notification</div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
            </li>

            <li>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">Cart</div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
            </li>

            <li>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">Account</div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile
