import React, { useEffect, useReducer, useState } from 'react'
import { GetToken } from '../../Utils/Storage'
import { useNavigate } from 'react-router-dom'

function Card(props) {
  const { images, title, description } = props
  const [editBtn, setEditBtn] = useState('')
  const token = GetToken()
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      return
    }
    console.log(token)
    setEditBtn(
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate('/updateProduct')
        }}>
        Edit
      </button>
    )
  }, [token])

  const [,] = useState({})

  
  const cartLocalStorage = JSON.parse(
    localStorage.getItem('selectedData') || '[]'
  )

  console.log('===========', cartLocalStorage)

  const [selectedData, setData] = useState(cartLocalStorage)

  useEffect(() => {
    localStorage.setItem('selectedData', JSON.stringify(selectedData))
  }, [selectedData])

  const handleAdd = () => {
    setData({ images, title, description, price })
  }

  console.log('selectedDataaaaaaa', selectedData)
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        {/* <figure>{images}</figure> */}

        <figure>
          <img src={images} alt="Shoes" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{title} </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                handleAdd()
              }}>
              Add to Cart
            </button>

            {/* {editBtn} <button className="btn btn-primary" >Delete</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
