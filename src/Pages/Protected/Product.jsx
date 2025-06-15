import { useEffect, useState } from 'react'

import Card from '../Public/Card'
import axios from 'axios'
import Navbar from '../../Routes/Navbar'
import Head from '../Public/Head'
import { useNavigate } from 'react-router-dom'

function Product() {
  const [cart, setCart] = useState(0)
  const [productList, setProductList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [navCartCount, setNavCartCount] = useState(0);
  const itemPerPage = 10

  const skip = (pageNumber - 1) * itemPerPage

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
        console.log("search");
        console.log(search);
        const fetchProduct = async () => {
          try {
            const response = await axios(
              `https://dummyjson.com/products?limit=${itemPerPage}&skip=${skip}`
            )

          let cartBox = JSON.parse(localStorage.getItem('cartBox'))
          cartBox = cartBox || [];
        
          cartBox.map(card => {
            response.data.products.map( product => {
              if(card.id === product.id){
                product.quantity = card.quantity;
              }

            })
          });        
        setNavCartCount(cartBox.length);
        setProductList(response.data.products)
        setTotalPages(Math.ceil(response.data.total / itemPerPage))
      } catch (err) {
        console.log(err)
      }
    }
    fetchProduct()
  }, [pageNumber, itemPerPage, setSearch])

  // -----
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
       
      if(product.id == id){
        if ( product.quantity){
          product.quantity = product.quantity + 1; 
        }else{
          product.quantity = 1;
        }              
      }
      
      return product;
    });
    console.log(newFilter);
    setProductList(newFilter);
    localStorage.setItem('cartBox', JSON.stringify(cartBox))
    setNavCartCount(cartBox.length);
    // setCartCounter(existing ? existing.quantity : 1)
  }

  const decrementCart = (id, images, title, description, price ) => {
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
    setNavCartCount(cartBox.length);

    const newFilter = productList.map((product) => {
       
      if(product.id == id){
        if ( product.quantity > 1){
          product.quantity = product.quantity - 1; 
        }else{
          // delete product.quantity;
          product.quantity = 0;
        }              
      }
      
      return product;
    });
    console.log(newFilter);
    setProductList(newFilter);
  }

  const incrementCart = (id, images, title, description, price ) => {
    addToCart(id,images, title, description, price)
  }
  // -----
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filtered = productList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  console.log(filtered)

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPageNumber(newPage)
    }
  }

  // const handleClick = () => {
  //   navigate('/createProduct')
  // }

  // const incrementCart = () => {
  //   setCart(cart + 1)
  // }

  // const decrementCart = () => {
  //   setCart(cart - 1)
  // }

  // Add to cart Functionality

  

  return (
    <div>
      <Navbar navCartCount={navCartCount} />
      <Head />

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handleSearchChange}
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />

        {/* <button
          className="btn btn-primary"
          style={{ marginLeft: '20px' }}
          onClick={handleClick}>
          ADD
        </button> */}
      </div>

      <div className="ProductListing">
        {filtered.length > 0 ? (
          filtered.map((product) => (
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

      {/* pagination functionality */}
      <div className="paginate">
        <button
          className="btn btn-outline btn-primary"
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            className="btn btn-outline btn-primary"
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={pageNumber === page}>
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

      {/* SetCount */}
    </div>
  )
}

export default Product
