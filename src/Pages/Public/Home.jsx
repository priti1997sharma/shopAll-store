import React, { useEffect, useState } from 'react'
import Card from './Card'
import Footer from './Footer'
import Navbar from '../../Routes/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Head from './Head'
import { GetToken } from '../../Utils/Storage'
import About from './About'

function Home() {

  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const token = GetToken()
  const [cart, setCart] = useState(0)
  let addButton = ''

  const navigate = useNavigate()

  const handleSearchChange = (event) => {
    console.log('handleSearchChange')
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  useEffect(() => {
    const setData = async () => {
      console.log('on component mount')
      const response = await axios.get(
        'https://dummyjson.com/products?limit=3&skip=0'
      )
      console.log(response)
      setFilteredData(response.data.products)
    }
    setData()
  }, [])
  //

  useEffect(() => {
    if (!search) {
      return
    }
    console.log('filter is working on page load')

    const filtered = filteredData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredData(filtered)
  }, [search])

  return (
    <>
      <Navbar />
      <Head />

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handleSearchChange}
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />

        {addButton}
      </div>

      <div className="card">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              images={item.images}
              title={item.title}
              price={item.price}
              description={item.description}
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
