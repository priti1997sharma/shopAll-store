import React from 'react'

function Card(props) {
  const { images, title, description } = props
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
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
