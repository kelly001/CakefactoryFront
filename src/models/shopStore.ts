import Product from "../models/product";
import Order from "../models/order";

interface ShopStore {
    cakes: Product[],
    orders: Order[],
    cakesTitles: string[],
}

export default ShopStore
