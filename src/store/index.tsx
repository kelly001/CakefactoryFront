import { createStore, AnyAction } from 'redux';
import ShopStore from "../models/shopStore";

const initialState: ShopStore = {
  cakes: [
    {
      id: 123,
      title: 'Blueberry cheesecake',
      description: 'Soft shortbread base, flavored cheesecake with blueberries',
      code: 'blueberry-cheesecake',
      image: 'cake1.jpg',
      props: ['milk', 'berries']
    },
    {
      id: 456,
      title: 'Pistachio cheesecake',
      description: 'Soft shortbread base, flavored cheesecake with pistachio butter',
      code: 'pistachio-cheesecake',
      image: 'cake1.jpg',
      props: ['milk', 'berries']
    },
    {
      id: 789,
      title: 'Spicy cherry cake',
      description: 'Spicy chocolate biscuit, chocolate creme, cherry konfi layer with cinnamon, salty caramel and roasted hazelnuts',
      code: 'spicy-cherry-cake',
      image: 'cake1.jpg',
      props: ['biscuit', 'chocolate', 'berries']
    }
  ],
  cakesTitles:  ["Черничный чизкейк", "Фисташковый чизкейк", "Торт Пряная вишня", "Торт Красный бархат", "Киевский торт",
    "Зефир", "Пирожное макарон", "Пирожное картошка", "Пирожное кунжутное бурфи", "Морковный торт", "Шоколадный бисквит"],
  orders: []
};

const cakesReducer = (state = initialState, action: AnyAction) =>{

  return state;
};

const store = createStore(cakesReducer);

export default store;