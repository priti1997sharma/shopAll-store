import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Services */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Services</h6>
          <a className="link link-hover block mb-2">Branding</a>
          <a className="link link-hover block">Marketing</a>
        </div>

        {/* Shop~All */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Shop~All</h6>
          <Link to="/about" className="link link-hover block mb-2">
            About Us
          </Link>
          <Link to="/viewCart" className="link link-hover block">
            My Orders
          </Link>
        </div>

        {/* Legal */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Legal</h6>
          <a className="link link-hover block mb-2">Terms of Use</a>
          <a className="link link-hover block">Privacy Policy</a>
        </div>

        {/* Social Media */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Follow Us</h6>
          <a className="link link-hover block mb-2">Facebook</a>
          <a className="link link-hover block mb-2">Instagram</a>
          <a className="link link-hover block">Twitter</a>
        </div>
      </div>

      <div className="text-center text-xs mt-10 opacity-60">
        &copy; {new Date().getFullYear()} Shop~All. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
