import ProductService from "../services/product-service";
import axios from 'axios';

const service = new ProductService();


const getCategoryList = () => {
    return dispatch => {
        dispatch(addLoadStarted());

        axios.get('http://127.0.0.1:8000/api/categories')
            .then(res => {
                dispatch(categoriesLoaded(res.data));
            });
    };
};

const getProductList = () => {
    return dispatch => {
        dispatch(addLoadStarted());

        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => {
                dispatch(productsLoaded(res.data));
            });
    };
};

const deleteCategory = (id) => {
    return dispatch => {
        dispatch(addLoadStarted());

        fetch(`http://127.0.0.1:8000/api/category/${id}`, {
            method: 'DELETE', // или 'PUT'
        }).then(() => axios.get('http://127.0.0.1:8000/api/categories')
            .then(res => {
                dispatch(deleteCategoryGet(res.data));
            }));
    };
};

const prepareCreateCategory = (name) => {
    return dispatch => {
        dispatch(addLoadStarted());

        axios.post('http://127.0.0.1:8000/api/categories',
            {
                name
            }).then(() => axios.get('http://127.0.0.1:8000/api/categories')
            .then(res => {
                dispatch(createCategory(res.data));
            })).catch((res) =>console.log(res));
    };
};

const prepareCreateProduct = (obj) => {
    return dispatch => {
        dispatch(addLoadStarted());
        fetch('http://127.0.0.1:8000/api/products', {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(obj), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>axios.get('http://127.0.0.1:8000/api/products')
            .then(res => {
                dispatch(createProduct(res.data));
            }));
    };
};


const addLoadStarted = () => ({
    type: 'ADD_TODO_STARTED'
});

const loadEnd = () => ({
    type: 'ADD_TODO_END'
});


const productsLoaded = (allProducts) => {
    return {
        type: 'PRODUCTS_LOADED',
        payload: allProducts.data
    }
};
const categoriesLoaded = (allCategories) => {
    return {
        type: 'CATEGORIES_LOADED',
        payload: allCategories
    }
};

const selectedCategory = (id) => {
    const allCategories = service.selectCategories(id);
    return {
        type: 'CATEGORIES_SELECT',
        payload: allCategories
    }
};

const createCategory = (allCategories) => {
    return {
        type: 'CATEGORIES_LOADED',
        payload: allCategories
    }
};

const createProduct = (allProducts) => {
    return {
        type: 'PRODUCTS_LOADED',
        payload: allProducts.data
    }
};

const deleteCategoryGet = (allCategories) => {
    return {
        type: 'CATEGORIES_LOADED',
        payload: allCategories
    }
};

export {
    getProductList,
    selectedCategory,
    prepareCreateCategory,
    prepareCreateProduct,
    deleteCategory,
    getCategoryList,
    loadEnd
};