import { useEffect, useState } from 'react'
import Card from '../Public/Card'
import axios from 'axios'
import Navbar from '../../Routes/Navbar'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Utils/AppContext'

function Product() {
  const [productList, setProductList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [navCartCount, setNavCartCount] = useState(0)
  const itemPerPage = 10

  const skip = (pageNumber - 1) * itemPerPage
  const navigate = useNavigate()

  const { searchQuery, cartitem, setCartItem } = useAppContext()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios(
          `https://dummyjson.com/products/search?q=${searchQuery}&skip=${skip}&limit=${itemPerPage}`
        )

        let cartBox = JSON.parse(localStorage.getItem('cartBox')) || []

        response.data.products.forEach((product) => {
          const cartItem = cartBox.find((item) => item.id === product.id)
          if (cartItem) {
            product.quantity = cartItem.quantity
          }
        })

        setNavCartCount(cartBox.length)
        setProductList(response.data.products)
        setTotalPages(Math.ceil(response.data.total / itemPerPage))
      } catch (err) {
        console.log(err)
      }
    }

    fetchProduct()
  }, [pageNumber, itemPerPage, searchQuery])

  const addToCart = (id, images, title, description, price) => {
    let cartBox = JSON.parse(localStorage.getItem('cartBox') || '[]')

    const existing = cartBox.find((item) => item.id === id)

    if (existing) {
      existing.quantity += 1
    } else {
      cartBox.push({ id, images, title, description, price, quantity: 1 })
    }

    const updatedList = productList.map((product) => {
      if (product.id === id) {
        product.quantity = (product.quantity || 0) + 1
      }
      return product
    })

    setProductList(updatedList)
    localStorage.setItem('cartBox', JSON.stringify(cartBox))
    setNavCartCount(cartBox.length)
  }

  const decrementCart = (id) => {
    let cartBox = JSON.parse(localStorage.getItem('cartBox') || '[]')
    const index = cartBox.findIndex((item) => item.id === id)

    if (index !== -1 && cartBox[index].quantity > 1) {
      cartBox[index].quantity -= 1
    } else if (index !== -1) {
      cartBox.splice(index, 1)
    }

    localStorage.setItem('cartBox', JSON.stringify(cartBox))
    setNavCartCount(cartBox.length)

    const updatedList = productList.map((product) => {
      if (product.id === id) {
        product.quantity = Math.max((product.quantity || 0) - 1, 0)
      }
      return product
    })

    setProductList(updatedList)
  }

  const incrementCart = (id, images, title, description, price) => {
    addToCart(id, images, title, description, price)
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPageNumber(newPage)
    }
  }

  return (
    <div>
      <Navbar navCartCount={navCartCount} />

      <div className="ProductListing">
        {productList.length > 0 ? (
          productList.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              images={product.images}
              title={product.title}
              description={product.description}
              quantity={product.quantity}
              incrementCart={incrementCart}
              decrementCart={decrementCart}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No products found</p>
        )}
      </div>

      {/* pagination */}
      <div className="paginate text-center mt-4 space-x-2">
        <button
          className="btn btn-outline btn-primary"
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            className={`btn btn-outline ${
              page === pageNumber ? 'btn-secondary' : 'btn-primary'
            }`}
            key={page}
            onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
        <button
          className="btn btn-outline btn-primary"
          onClick={() => handlePageChange(pageNumber + 1)}
          disabled={pageNumber === totalPages}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Product
