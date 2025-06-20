import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav style={{ paddingLeft: '150px' }}>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Shaop~All</h6>
          <Link to="/about" className="link link-hover">About us</Link>
          <Link to="/viewCart" className="link link-hover">My order</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">SocialMedia</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover"> Twitter</a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
