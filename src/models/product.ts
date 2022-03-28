interface Product {
    id: number,
    code: string,
    title: string,
    description: string,
    image: string,
    price?: number,
    props?: string[]
}

export default Product