import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions";
import {ProductList} from "../products";
import {Category} from "../categories";

const Home = ({products, categories, selectedCategory}) => {

    const [AllProducts, changeAllProducts] = useState([]);
    const [AllCategories, changeAllCategories] = useState([]);
    useEffect(() => {
        products.then((item) => changeAllProducts(item['data'])).catch(() => {});
        categories.then((item) => changeAllCategories(item)).catch(() => {});
    });
    const changeCategory = (id) => {
        selectedCategory(id)
    }
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col col-2">
                   <Category AllCategories={AllCategories} changeCategory={changeCategory} />
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
};

export default connect(mapStateToProps, actions)(Home);