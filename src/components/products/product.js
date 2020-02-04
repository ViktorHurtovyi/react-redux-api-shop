import React from 'react';
import {Link} from "react-router-dom";

const Product = ({item: {id, name, price, discount_price, short_description, long_description, image}}) => {

    return (
        <div className='col-3 item-wrapper'>
            <div className='row'>
                <div className='row'>
                    <img className='offset-2 col-8' src={image} alt={name}/>
                </div>
                <div>
                    <div className='item-name'><Link to='/product/'> {name} </Link></div>
                    <div
                        className='col-col-6 item-description'>{short_description.length > 70 ? short_description.slice(0, 70) + '...' : short_description}</div>
                </div>
                <div className='buy-wrapper'>
                    <span className='item-price float-left'>{price} UAH</span>
                    <button className='buy-btn float-right'>Купить</button>
                </div>
            </div>
        </div>
    );
};

export default Product;