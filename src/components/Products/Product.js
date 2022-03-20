import React from 'react'

const Product = (props) => {
  return (
    <div className={"card m-1 w-25"}>
      <img src={'/images/'+props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">More about this</a>
        </div>
    </div>
  )
}

export default Product;