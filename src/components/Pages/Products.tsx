import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux'
import Product from '../Products/Product'
import ShopStore from "../../models/shopStore";

const Products: React.FC = () => {
  const cakes = useSelector((state: ShopStore) => state.cakes);

  const searchPhraseRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState(cakes);
  const [showNotFoundError, setShowNotFoundError] = useState(false);

  const searchHandler = (event: React.MouseEvent) => {
    let newProducts = [];

    for (let product of products) {
      let productStr = product.title.toLowerCase();
      let searchPhrase = searchPhraseRef.current?.value;
      if (searchPhrase !== undefined && productStr.includes(searchPhrase.toLowerCase())) {
        newProducts.push(product)
      }
    }

    if (newProducts.length > 0) {
      setProducts(newProducts);
      setShowNotFoundError(false)
    } else {
      setProducts(cakes);
      setShowNotFoundError(true)
    }
  };

  return (
    <div className={'container'}>
      <h2 className={'tittle'}>Choose your cake</h2>

        <div className={"row g-2 justify-content-center search-form"}>
          <div className="col-auto">
            <input
              className={"form-control"}
              type="text"
              ref={searchPhraseRef}
              //onChange={(event) => setSearchPhrase(event.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className={"btn btn-primary"} onClick={event => searchHandler(event)}>Search</button>
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
          <Product product={el} key={el.code}
          />
        ))}
      </div>
    </div>
  )
};

export default Products;