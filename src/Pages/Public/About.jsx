import React from 'react'
import Navbar from '../../Routes/Navbar'
import Head from './Head'
import Footer from './Footer'
import { TruckIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

function About() {
  return (
    <div>
      <Navbar />
      <Head />
      <div>
        <img src="src/assest/c837a6_e0bc54d0bb0b429590e8f82d575a661f~mv2.avif"></img>
        <div
          style={{
            gridRow: '1',
            zIndex: '1',
            position: 'relative',
            marginTop: '-22%',
            alignItems: 'center',
            marginLeft: '20%',
          }}>
          <img
            src="src/assest/Artboard.avif"
            style={{ borderRadius: '10px' }}></img>
        </div>
        <div>
          <h1
            style={{
              gridRow: '1',
              zIndex: '1',
              position: 'relative',
              marginTop: '-15%',
              alignItems: 'center',
              marginLeft: '35%',
              fontSize: '45px',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Save Time and Money
            <br />
            Shop With Us On the Go
          </h1>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '10%',
        }}>
        <div
          style={{ border: '1px solid grey', width: '20%', padding: '20px' }}>
          <TruckIcon
            className=" text-white-600"
            style={{ width: '20%', marginLeft: '40%', padding: '10px' }}
          />
          <span style={{ fontSize: '25px' }}>Free delivery</span>
          <br />
          <span style={{ fontSize: '15px' }}>To Your Door</span>
        </div>
        <div
          style={{
            border: '1px solid grey',
            width: '20%',
            padding: '20px',
          }}>
          <ShoppingBagIcon
            className="text-white-600"
            style={{ width: '20%', marginLeft: '40%', padding: '10px' }}
          />
          <span style={{ fontSize: '25px' }}>Local Pickup</span>
          <br />
          <span style={{ fontSize: '15px' }}>Check Out Locations</span>
        </div>
        <div
          style={{ border: '1px solid grey', width: '20%', padding: '20px' }}>
          <UserCircleIcon
            className=" text-white-600"
            style={{ width: '20%', marginLeft: '40%', padding: '10px' }}
          />
          <span style={{ fontSize: '25px' }}>Available for You</span> <br />
          <span style={{ fontSize: '15px' }}>Online Support 24/7</span>
        </div>
        <div
          style={{
            border: '1px solid grey',
            width: '20%',
            padding: '20px',
          }}>
          <DevicePhoneMobileIcon
            className=" text-white-600"
            style={{ width: '20%', marginLeft: '40%', padding: '10px' }}
          />
          <span style={{ fontSize: '25px' }}>Order on Go</span>
          <br />
          <span style={{ fontSize: '15px' }}>Download Our App</span>
        </div>
      </div>

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

      <div
        className="row"
        style={{
          width: '90%',
          display: 'flex',
          justifyContent: 'center',

          padding: '50px',
          alignItems: 'center',
        }}>
        <div>
          <img src="src/assest/abt.avif" className="abtImg"></img>
        </div>
        <div className="col-md-6">
          <p className="text">
            <h1 className="heading">About Us</h1>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click <br />
            “Edit Text” or double click me to add your own
            <br />
            content and make changes to the font. Feel free to drag and drop me
            <br />
            anywhere you like on your page. I’m a great place for you to tell a
            <br />
            story and let your users know a little more about you.
            <br />
            This is a great space to write a long text about your company and
            your
            <br />
            services. You can use this space to go into a little more detail
            <br />
            about your company. Talk about your team and what services you
            <br />
            provide. Tell your visitors the story of how you came up with the
            <br />
            idea for your business and what makes you different from your
            <br />
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </div>

      {/* <div
        style={{
          display: 'flex',
          width: '80%',
          justifyContent: 'content',
          alignItems: 'center',
          marginLeft: '10%',
        }}>
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
      </div> */}
      <Footer />
    </div>
  )
}

export default About
