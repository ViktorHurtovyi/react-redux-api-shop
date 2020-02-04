const productsLoaded = (allProducts) => {
    return{
        type: 'PRODUCTS_LOADED',
        payload: allProducts
    }
};
const categoriesLoaded = (allCategories) => {
    return{
        type: 'CATEGORIES_LOADED',
        payload: allCategories
    }
};

export {
    productsLoaded,
    categoriesLoaded
};