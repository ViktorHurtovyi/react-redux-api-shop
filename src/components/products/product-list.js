import React from 'react';
import Product from "./product";
import './style.css';

const ProductList = ({AllProducts}) => {
    return (
        <div className="row product-list-wrapper center ">
            {AllProducts.map((item) => {
                return <Product key={item.id} item={item}/>
            })}
        </div>
    );
};


export default ProductList;