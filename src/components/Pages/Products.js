import React, { useState } from 'react';

const Products = () => {
  const cakes = ["Черничный чизкейк", "Фсташковый чизкейк", "Торт Пьяная вишня", "Торт Красный бархат", "Киевский торт",
  "Зефир", "Пирожное макарон", "Пирожное картошка", "Пирожное кунжутное бурфи", "Морковный торт", "Шоколадный бисквит"]
  const [searchPhrase, setSearchPhrase] = useState('')
  const [products, setProducts] = useState(cakes)
  const [showNotFoundError, setShowNotFoundError] = useState(false)

  const searchHandler = () => {
    let newProducts = []

    for (let product of products) {
      let productStr = product.toLowerCase()
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
      <h2>Выбери свой тортик</h2>

        <form className={"row g-2 justify-content-center"}>
          <div className="col-auto">
            <input
              className={"form-control"}
              type="text"
              value={searchPhrase}
              onChange={(event) => setSearchPhrase(event.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className={"btn btn-primary"} onClick={searchHandler}>Найти</button>
          </div>
        </form>

      { showNotFoundError && (
        <div className={'row'}>
          <div className="alert alert-danger" role="alert">
            По вашему запросу не нашлось тортика, посмотрите все наши предложения
          </div>
        </div>
      )}

      <div className={'row'}>
        <ul>
        {products && products.map(el => (<li>{el}</li>))}
        </ul>
      </div>
    </div>
  )
}

export default Products;