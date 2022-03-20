import { createStore } from 'redux';

const initialState = {
  cakes: [
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
  ],
  cakesTitles:  ["Черничный чизкейк", "Фисташковый чизкейк", "Торт Пряная вишня", "Торт Красный бархат", "Киевский торт",
    "Зефир", "Пирожное макарон", "Пирожное картошка", "Пирожное кунжутное бурфи", "Морковный торт", "Шоколадный бисквит"],
  orders: []
}

const cakesReducer = (state = initialState, action) =>{

  return state;
}

const store = createStore(cakesReducer);

export default store;