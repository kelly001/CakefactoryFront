import React, { useState } from 'react';
import Product from '../Products/Product.js'

const Products = () => {
  const __cakes = ["Черничный чизкейк", "Фисташковый чизкейк", "Торт Пряная вишня", "Торт Красный бархат", "Киевский торт",
  "Зефир", "Пирожное макарон", "Пирожное картошка", "Пирожное кунжутное бурфи", "Морковный торт", "Шоколадный бисквит"]

  const cakes = [
    {
      title: 'Blueberry cheesecake',
      description: 'Soft shortbread base, flavored cheesecake with blueberries',
      code: 'blueberry-cheesecake',
      image: 'cake1.jpg'
    },
    {
      title: 'Pistachio cheesecake',
      description: 'Soft shortbread base, flavored cheesecake with pistachio butter',
      code: 'pistachio-cheesecake',
      image: 'cake1.jpg'
    },
    {
      title: 'Spicy cherry cake',
      description: 'Spicy chocolate biscuit, chocolate creme, cherry konfi layer with cinnamon, salty caramel and roasted hazelnuts',
      code: 'spicy-cherry-cake',
      image: 'cake1.jpg'
    }
  ]
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
            <button type="submit" className={"btn btn-primary"} onClick={searchHandler}>Найти</button>
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
          <Product
            image={el.image}
            code={el.code}
            key={el.code}
            title={el.title}
            description={el.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Products;