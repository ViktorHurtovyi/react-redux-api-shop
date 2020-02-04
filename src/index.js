import React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import { ProductsServiceProvider } from "./components/products-service-context";
import ProductService from "./services/product-service";

import store from "./store";

const productStoreService = new ProductService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ProductsServiceProvider value={productStoreService}>
                <Router>
                    <App />
                </Router>
            </ProductsServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root')
);