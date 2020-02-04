import React, {useEffect, useState} from 'react';
import {withProductStoreService} from '../hoc'
import {connect} from "react-redux";
import * as actions from "../../actions";
import {ProductList} from "../products";
import Category from "../categories/category";

const Home = ({bookstoreService}) => {
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
                   <Category AllCategories={AllCategories} />
                </div>
                <div className="col col-10">
                    <ProductList AllProducts={AllProducts} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories
    }
}

export default withProductStoreService()(connect(mapStateToProps, actions)(Home));