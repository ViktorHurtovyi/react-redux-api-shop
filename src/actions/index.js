import ProductService from "../services/product-service";
const service = new ProductService();
const productsLoaded = () => {
    const allProducts = service.getProducts();
    return{
        type: 'PRODUCTS_LOADED',
        payload: allProducts
    }
};
const categoriesLoaded = () => {
    const allCategories = service.getCategories();
    return{
        type: 'CATEGORIES_LOADED',
        payload: allCategories
    }
};

const selectedCategory = (id) => {
    const allCategories = service.selectCategories(id);
    return{
        type: 'CATEGORIES_SELECT',
        payload: allCategories
    }
};

const createCategory = (name) => {
    service.createCategory(name);
    const allCategories = service.getCategories();
    return{
        type: 'CATEGORIES_LOADED',
        payload: allCategories
    }
};

const createProduct = (obj) => {
    service.createProduct(obj);
    const allProducts = service.getProducts();
    return{
        type: 'PRODUCTS_LOADED',
        payload: allProducts
    }
};

export {
    productsLoaded,
    categoriesLoaded,
    selectedCategory,
    createCategory,
    createProduct
};