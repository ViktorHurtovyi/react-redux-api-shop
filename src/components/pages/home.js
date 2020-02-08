import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions";
import {ProductList} from "../products";
import {Category} from "../categories";
import Spinner from "../spinner";

const Home = ({products, categories, loading, selectedCategory, loadEnd}) => {

    const [AllProducts, changeAllProducts] = useState([]);
    const [AllCategories, changeAllCategories] = useState([]);
    const [load, changeLoad] = useState([]);
    useEffect(() => {
        changeAllProducts(products);
        changeAllCategories(categories);
        changeLoad(loading);
        loadEnd();
    }, [products, categories]);
    const changeCategory = (id) => {
        selectedCategory(id)
    };
    const result = load !== true ?

        <div className="row">
            <div className="col col-2">
                <Category AllCategories={AllCategories} changeCategory={changeCategory}/>
            </div>
            <div className="col col-10">
                <ProductList AllProducts={AllProducts}/>
            </div>
        </div>
        : <Spinner/>;
    return (
        <div className='container-fluid'>
            {result}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories,
        loading: state.loading
    }
};

export default connect(mapStateToProps, actions)(Home);