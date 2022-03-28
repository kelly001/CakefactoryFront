import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Product from '../Products/Product'
import ShopStore from "../../models/shopStore";

const Products: React.FC = () => {
  const cakes = useSelector((state: ShopStore) => state.cakes)

  const [searchPhrase, setSearchPhrase] = useState('')
  const [products, setProducts] = useState(cakes)
  const [showNotFoundError, setShowNotFoundError] = useState(false)

  const searchHandler = () => {
    let newProducts = []

    for (let product of products) {
      let productStr = product.title.toLowerCase()
      if (productStr.includes(searchPhrase.toLowerCase())) {
        newProducts.push(product)
      }
    }

    if (newProducts.length > 0) {
      setProducts(newProducts)
      setShowNotFoundError(false)
    } else {
      setShowNotFoundError(true)
    }
  }

  return (
    <div className={'container'}>
      <h2 className={'tittle'}>Choose your cake</h2>

        <div className={"row g-2 justify-content-center"}>
          <div className="col-auto">
            <input
              className={"form-control"}
              type="text"
              value={searchPhrase}
              onChange={(event) => setSearchPhrase(event.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className={"btn btn-primary"} onClick={searchHandler}>Search</button>
          </div>
        </div>

      { showNotFoundError && (
        <div className={'row'}>
          <div className="alert alert-danger" role="alert">
            Sorry, couldn't find cake for your request. Try something other or choose from below
          </div>
        </div>
      )}

      <div className={'row products'}>
        {products && products.map(el => (
          <Product product={el}
          />
        ))}
      </div>
    </div>
  )
}

export default Products;