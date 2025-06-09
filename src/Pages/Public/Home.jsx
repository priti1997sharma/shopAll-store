import React, { useEffect, useState } from 'react'
import Card from './Card'
import Footer from './Footer'
import Navbar from '../../Routes/Navbar'

function Home() {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const data = [
    {
      nameImg: 'HeadPhone',
      images:
        'src/assest/bh41-bluetooth-wireless-over-ear-headphone-blue-500x500.webp',
      title: 'HeadPhone',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates eligendi, sed error voluptate, magnam, voluptatem molestiae vel soluta ut vitae ducimus. Ab numquam voluptatum maiores facilis iste minus repellat necessitatibus.',
    },
    {
      images: 'src/assest/aykll_1200.jpg',
      nameImg: 'T-Shirt',
      title: 'T-Shirt',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates eligendi, sed error voluptate, magnam, voluptatem molestiae vel soluta ut vitae ducimus. Ab numquam voluptatum maiores facilis iste minus repellat necessitatibus.',
    },
    {
      images: 'src/assest/whatsapp-image-2023-11-07-at-6-50-38-pm-1.jpeg',
      title: 'Shoes',
      nameImg: 'Shoes',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates eligendi, sed error voluptate, magnam, voluptatem molestiae vel soluta ut vitae ducimus. Ab numquam voluptatum maiores facilis iste minus repellat necessitatibus.',
    },
  ]

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredData(filtered)
  }, [search])

  return (
    <>
      <Navbar />

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handleSearchChange}
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />
      </div>

      <div className="card">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              name={item.nameImg}
              images={item.images}
              title={item.title}
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
