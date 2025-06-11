import { useEffect, useState } from 'react'

import Card from '../Public/Card'
import axios from 'axios'
import Navbar from '../../Routes/Navbar'
import Head from '../Public/Head'
import { useNavigate } from 'react-router-dom'

function Product() {
  const [productList, setProductList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const itemPerPage = 10

  const skip = (pageNumber - 1) * itemPerPage

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios(
          `https://dummyjson.com/products?limit=${itemPerPage}&skip=${skip}`
        )

        setProductList(response.data.products)
        setTotalPages(Math.ceil(response.data.total / itemPerPage))
      } catch (err) {
        console.log(err)
      }
    }
    fetchProduct()
  }, [pageNumber, itemPerPage])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filtered = productList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  console.log(filtered)

  const handlePageChange = (_, value) => {
    console.log(value)
    setPageNumber(value)
  }

  const handleClick = () => {
    navigate('/createProduct')
  }

  return (
    <div>
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

        <button
          className="btn btn-primary"
          style={{ marginLeft: '20px' }}
          onClick={handleClick}>
          ADD
        </button>
      </div>

      <div className="ProctsListing">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              images={product.images}
              id={product.id}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No products found</p>
        )}
      </div>
      <div className="join">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked="checked"
          count={totalPages}
          page={pageNumber}
          onChange={handlePageChange}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
          count={totalPages}
          page={pageNumber}
          onChange={handlePageChange}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
          count={totalPages}
          page={pageNumber}
          onChange={handlePageChange}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
          count={totalPages}
          page={pageNumber}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Product
