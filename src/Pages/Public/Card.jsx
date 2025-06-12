import React, { useEffect, useState } from 'react'
import { GetToken } from '../../Utils/Storage'
import { useNavigate } from 'react-router-dom'

function Card(props) {

  const[cart, setCart]=useState([])
  const { id, images, title, description, price } = props
  const token = GetToken()
  const navigate = useNavigate()

  // Load cart from localStorage initially
  const [selectedData, setData] = useState(() => {
    return JSON.parse(localStorage.getItem('selectedData') || '[]')
  })

  // Save to localStorage on cart update
  useEffect(() => {
    localStorage.setItem('selectedData', JSON.stringify(selectedData))
  }, [selectedData])

  // Handle "Add to Cart"
  const handleAdd = () => {
    const newItem = { images, title, description, price }

    // Check if item already in cart (based on title)
    const exists = selectedData.some(item => item.title === title)

    if (exists) {
      alert('Item already in cart.')
      return
    }

    // Add item to cart
    setCart(prev => [...prev, newItem])
    alert('Item added to cart!')
  }

  // handleCount

  const incrementCount=(product)=>{
    setCart((oldProduct) => {
      const cardList = [...oldProduct, product];
      console.log(cardList);
      return cardList
    });
  }
  // console.log("======", incrementCount)

  const decrementCount=(product)=>{
    setCart((oldProduct) => {
      console.log({oldProduct});
      const remainingProduct = oldProduct.filter(item => !item.id)
      console.log({remainingProduct})
      return remainingProduct;
    });
  }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={images} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p><strong>Price:</strong> ₹{price}</p>

          <div className="card-actions justify-start">
          <button className="btn btn-primary" onClick={() => {
            decrementCount(props)
          }}>-</button>
          <button className="btn btn-primary" onClick={() => {
            incrementCount(props)
          }}>+</button>
</div>


          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={handleAdd}>
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card


// import React, { useEffect, useState } from 'react'
// import { GetToken } from '../../Utils/Storage'
// import { useNavigate } from 'react-router-dom'

// function Card(props) {
//   const { images, title, description } = props
//   const [editBtn, setEditBtn] = useState('')
//   const token = GetToken()
//   const navigate = useNavigate()
//   useEffect(() => {
//     if (!token) {
//       return
//     }
//     console.log(token)
//     setEditBtn(
//       <button
//         className="btn btn-primary"
//         onClick={() => {
//           navigate('/updateProduct')
//         }}>
//         Edit
//       </button>
//     )
//   }, [token])

//   const cartLocalStorage = JSON.parse(
//     localStorage.getItem('selectedData') || '[]'
//   )

//   console.log('===========', cartLocalStorage)

//   const [selectedData, setData] = useState(cartLocalStorage)

//   useEffect(() => {
//     localStorage.setItem('selectedData', JSON.stringify(selectedData))
//   }, [selectedData])

//   const handleAdd = () => {
//     setData({ images, title, description})
//   }

//   console.log('selectedDataaaaaaa', selectedData)
//   return (
//     <div>
//       <div className="card bg-base-100 w-96 shadow-sm">
//         {/* <figure>{images}</figure> */}

//         <figure>
//           <img src={images} alt="Shoes" />
//         </figure>

//         <div className="card-body">
//           <h2 className="card-title">{title} </h2>
//           <p>{description}</p>
//           <div className="card-actions justify-end">
//             <button
//               className="btn btn-primary"
//               onClick={() => {
//                 handleAdd()
//               }}>
//               Add to Cart
//             </button>

//             {/* {editBtn} <button className="btn btn-primary" >Delete</button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card
