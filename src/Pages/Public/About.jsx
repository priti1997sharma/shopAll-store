import React from 'react'
import Navbar from '../../Routes/Navbar'
import Head from './Head'

function About() {
  return (
    <div>
      <Navbar />
      <Head />

      <h1 style={{ textAlign: 'center', fontSize: '40px' }}> ABOUT US</h1>
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="src/assest/abt.jpg"
            className="w-full"
            style={{ height: '500px' }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="src/assest/bgimg.jpg"
            className="w-full"
            style={{
              height: '500px',
              boxSizing: 'border-box',
              backgroundSize: 'cover',
            }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="src/assest/stock-photo-online-shopping-with-laptop.jpeg"
            className="w-full"
            style={{ height: '500px' }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}

      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <img
            src="src/assest/c837a6_564931f091d34dd28dda690375e97842~mv2.avif"
            className="w-full"
            style={{
              height: '400px',
              width: '750px',
              paddingLeft: '50px',
              paddingTop: '50px',
            }}
          />
        </div>

        <div style={{ width: '50%' }}>
          <img
            src="src/assest/c837a6_dcb97d2296b34b98858649b8cb74b683~mv2.avif"
            className="cardimg"
            style={{
              height: '400px',
              width: '750px',
              paddingRight: '50px',
              paddingTop: '50px',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default About
