import React, { useEffect, useState } from 'react'
import Card from './Card'
import Footer from './Footer'
import Navbar from '../../Routes/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Head from './Head'
import { GetToken } from '../../Utils/Storage'

function Home() {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const token = GetToken();
  let addButton = "";

  useEffect(() => {
    if(!token){
      return ;
    }
    addButton = <button className="btn btn-primary" onClick={()=>{
      navigate('/createProduct')
    }}>ADD</button>
  },[token])


//   const data = [
//     {
//       nameImg: 'HeadPhone',
//       images:
//         'src/assest/bh41-bluetooth-wireless-over-ear-headphone-blue-500x500.webp',
//       title: 'HeadPhone',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates eligendi, sed error voluptate, magnam, voluptatem molestiae vel soluta ut vitae ducimus. Ab numquam voluptatum maiores facilis iste minus repellat necessitatibus.',
//     },
//     {
//       images: 'src/assest/aykll_1200.jpg',
//       nameImg: 'T-Shirt',
//       title: 'T-Shirt',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates eligendi, sed error voluptate, magnam, voluptatem molestiae vel soluta ut vitae ducimus. Ab numquam voluptatum maiores facilis iste minus repellat necessitatibus.',
//     },
//     {
//       images: 'src/assest/whatsapp-image-2023-11-07-at-6-50-38-pm-1.jpeg',
//       title: 'Shoes',
//       nameImg: 'Shoes',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates eligendi, sed error voluptate, magnam, voluptatem molestiae vel soluta ut vitae ducimus. Ab numquam voluptatum maiores facilis iste minus repellat necessitatibus.',
//     },
//   ]

const navigate= useNavigate()

  const handleSearchChange = (event) => {
    console.log("handleSearchChange");
    console.log(event.target.value);
    setSearch(event.target.value)
  }

// 
useEffect(() => {
    const setData = async() => {
        console.log("on component mount");
        const response = await axios.get("https://dummyjson.com/products?limit=3&skip=0")
        console.log(response);
        setFilteredData(response.data.products)
    }
    setData();
   
  }, [])  
// 

  useEffect(() => {
    if(!search){
        return ;
    }
    console.log("filter is working on page load");

    const filtered = filteredData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
   setFilteredData(filtered)
  }, [search])

  return (
    <>
      <Navbar />
      <Head/>

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
