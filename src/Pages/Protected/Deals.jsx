import React, { useEffect, useState } from 'react'
import Head from '../Public/Head'
import Navbar from '../../Routes/Navbar'
import Footer from '../Public/Footer'
import { TruckIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import Card from '../Public/Card'
import axios from 'axios'

function Deals() {
  const [DataList, setDataList] = useState([])

  useEffect(() => {
    const setData = async () => {
      const response = await axios.get(
        'https://dummyjson.com/products?limit=3&skip=24'
      )
      console.log(response)
      setDataList(response.data.products)
    }
    setData()
  }, [])
  return (
    <>
      <Navbar />
      <Head />
      <div
        className="imgContainer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '30px',
        }}>
        <img src="src/assest/hero3_banner_02.jpg" />

        <div style={{ position: 'relative' }}>
          <img src="src/assest/hero3_banner_01.jpg" />

          <div
            className="content"
            style={{
              position: 'absolute',
              color: 'black',
              padding: '30px',
              zIndex: '1',
              top: '0px',
              fontSize: '35px',
              fontWeight: 'bold',
            }}>
            <p> Discover 100% Organic</p>
            <p> Great Deals on your </p>
            <p>Fresh Organic Vegitables</p>
            <p>$59.00</p>
            <button
              style={{
                background: 'red',
                borderRadius: '10px',
                fontSize: '25px',
                fontWeight: 'bold',
                color: 'white',
                padding: '20px',
                marginTop: '40px',
              }}>
              Shop now
            </button>
          </div>
        </div>
      </div>
      {/* Product List */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '2%',
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
      <div
        className="productList"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        {DataList.length > 0 ? (
          DataList.map((item, index) => (
            <Card
              style={{ border: '1px solid grey' }}
              key={index}
              id={item.id}
              images={item.images}
              title={item.title}
              price={item.price}
              description={item.description}
              quantity={item.quantity}
              // incrementCart={incrementCart}
              // decrementCart={decrementCart}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No products found</p>
        )}
      </div>
      <div style={{ margin: '20px' }}>
        <img src="src/assest/home_01_sl_5s.jpg" style={{ width: '100%' }}></img>
      </div>
      <Footer />
    </>
  )
}

export default Deals
