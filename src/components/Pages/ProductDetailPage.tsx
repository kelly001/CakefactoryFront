import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate  } from 'react-router-dom';
import ShopStore from "../../models/shopStore";
import ProductDetail from "../Products/ProductDetail";
import ProductType from "../../models/product";

const ProductDetailPage: React.FC = () => {
    const products = useSelector((state: ShopStore) => state.cakes);
    const params = useParams();
    let navigate = useNavigate();
    let product;

    if (params.productCode !== '') {
        product = products.find((el) => {
            return el.code == params.productCode
        })
    }

    if (product === null || product === undefined) {
        navigate('/products');
    }

    return (
        <div className={'container'}>
            {product !== undefined && <ProductDetail product={product} />}
        </div>
    )
};

export default ProductDetailPage;
