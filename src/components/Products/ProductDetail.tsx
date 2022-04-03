import React from 'react'
import ProductType from "../../models/product";

const ProductDetail: React.FC<{ product: ProductType }> = (props) => {
    return (
        <div>
            <h2>{props.product.title}</h2>
            <div className="row">
                <div className="col-4">
                    <img src={'/images/' + props.product.image} className="img-thumbnail float-start" alt="detail-img"/>
                </div>
                <div className="col-8">
                    <p>{props.product.description}</p>
                    Properties:
                    <ul>
                        {props.product.props !== undefined && props.product.props.map(el => {
                            return <li>{el}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;
