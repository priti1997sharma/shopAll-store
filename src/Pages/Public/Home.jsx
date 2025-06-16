import React, { useEffect, useState } from 'react'
import Card from './Card'
import Footer from './Footer'
import Navbar from '../../Routes/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Head from './Head'
import { useAppContext } from '../../Utils/AppContext'

function Home() {
  const [search, setSearch] = useState('')
  const [productList, setProductList] = useState([])
  const [navCartCount, setNavCartCount] = useState(0)

  const { theme, setTheme } = useAppContext()
  console.log({ theme })
  let addButton = ''

  const navigate = useNavigate()

  const handleSearchChange = (event) => {
    console.log('=========', event.target.value)
    setSearch(event.target.value)
  }

  useEffect(() => {
    const setData = async () => {
      console.log('on component mount')
      const response = await axios.get(
        'https://dummyjson.com/products?limit=3&skip=0'
      )
      console.log(response)

      let cartBox = JSON.parse(localStorage.getItem('cartBox'))
      cartBox = cartBox || []
      console.log({ cartBox })

      cartBox.map((card) => {
        response.data.products.map((product) => {
          if (card.id === product.id) {
            product.quantity = card.quantity
          }
        })
      })
      setProductList(response.data.products)
      setNavCartCount(cartBox.length)
      //
    }
    setData()
  }, [])
  //

  useEffect(() => {
    if (!search) {
      return
    }
    console.log('filter is working on page load')

    const filterFunc = (product) =>
      product.title.toLowerCase().includes(search.toLowerCase())

    const filtered = productList.filter(filterFunc)
    setProductList(filtered)
  }, [search])

  // Card Funcitonality

  const handleAdd = () => {
    const newItem = { id, images, title, description, price }
    setData((prev) => [...prev, newItem])
    addToCart(id, title, description, price)
  }

  const addToCart = (id, images, title, description, price) => {
    let cartBox = JSON.parse(localStorage.getItem('cartBox') || '[]')

    const existing = cartBox.find((item) => item.id === id)

    if (existing) {
      existing.quantity += 1
    } else {
      cartBox.push({
        id,
        images,
        title,
        description,
        price,
        quantity: 1,
      })
    }
    // we have to syn the local storage data into the product list state
    const newFilter = productList.map((product) => {
      if (product.id == id) {
        if (product.quantity) {
          product.quantity = product.quantity + 1
        } else {
          product.quantity = 1
        }
      }

      return product
    })
    console.log(newFilter)
    setProductList(newFilter)
    localStorage.setItem('cartBox', JSON.stringify(cartBox))
    setNavCartCount(cartBox.length)
    // setCartCounter(existing ? existing.quantity : 1)
  }

  const decrementCart = (id, images, title, description, price) => {
    let cartBox = JSON.parse(localStorage.getItem('cartBox') || '[]')
    const index = cartBox.findIndex((item) => item.id === id)

    if (index !== -1 && cartBox[index].quantity > 1) {
      cartBox[index].quantity -= 1
      localStorage.setItem('cartBox', JSON.stringify(cartBox))
      // setCartCounter(cartBox[index].quantity)
    } else if (index !== -1) {
      cartBox.splice(index, 1)
      localStorage.setItem('cartBox', JSON.stringify(cartBox))
    }
    setNavCartCount(cartBox.length)

    const newFilter = productList.map((product) => {
      if (product.id == id) {
        if (product.quantity > 1) {
          product.quantity = product.quantity - 1
        } else {
          // delete product.quantity;
          product.quantity = 0
        }
      }

      return product
    })
    console.log(newFilter)
    setProductList(newFilter)
  }

  const incrementCart = (id, images, title, description, price) => {
    addToCart(id, images, title, description, price)
  }

  const handleToggle = () => {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }

  //
  return (
    <>
      <Navbar navCartCount={navCartCount} />
      <Head />

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <input
          type="text"
          placeholder="Search product........"
          onChange={handleSearchChange}
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />

        {addButton}
      </div>

      <input
        type="checkbox"
        onChange={handleToggle}
        defaultChecked
        className="toggle"
      />

      <div className="card">
        {productList.length > 0 ? (
          productList.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              images={item.images}
              title={item.title}
              price={item.price}
              description={item.description}
              quantity={item.quantity}
              incrementCart={incrementCart}
              decrementCart={decrementCart}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No products found</p>
        )}
        <br />
      </div>

      <Footer />
    </>
  )
}

export default Home
