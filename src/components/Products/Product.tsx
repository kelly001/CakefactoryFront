import React from 'react'
import ProductType from "../../models/product";

const Product: React.FC<{product: ProductType}> = (props) => {
  return (
    <div className={"card m-1 w-25"}>
      <img src={'/images/'+props.product.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">{props.product.description}</p>
          <a href={"/products/" + props.product.code} className="btn btn-primary">More about this</a>
        </div>
    </div>
  )
};

export default Product;