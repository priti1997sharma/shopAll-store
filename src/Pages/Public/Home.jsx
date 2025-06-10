import Card from './Card'
import Footer from './Footer'
import Navbar from '../../Routes/Navbar'
import { useState } from 'react'
import Head from './Head'

function Home() {
  const [search, setSearch] = useState('')

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

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  console.log(filtered)

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

        <button className="btn btn-primary" style={{ marginLeft: '20px' }}>
          ADD
        </button>
      </div>

      <div className="card">
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <Card
              name={item?.nameImg}
              images={item?.images}
              title={item?.title}
              description={item?.description}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No products found</p>
        )}
        <br />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home
