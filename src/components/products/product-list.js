import React, {useEffect, useState} from 'react';
import Product from "./product";
import './style.css';
import { withProductStoreService } from '../hoc'
import {connect} from "react-redux";
import * as actions from "../../actions";

const ProductList = ({bookstoreService}) => {
    const [AllProducts, changeAllProducts] = useState([]);
    const [AllCategories, changeAllCategories] = useState([]);
    useEffect(() => {
        bookstoreService.getProducts().then((item) => changeAllProducts(item['data']));
        bookstoreService.getCategories().then((item) => changeAllCategories(item));
    }, []);

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col col-2">
                    {AllCategories.map((item) => <h2>{item.name}</h2>)}
                </div>
                <div className="col col-10">
                    <div className="row product-list-wrapper center ">
                        {AllProducts.map((item) => {
                            return <Product key={item.id} item={item}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, actions)(withProductStoreService()(ProductList));