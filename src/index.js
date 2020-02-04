import React from "react";
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Create, CreateProduct} from "./components/pages";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

import store from "./store";
import {categoriesLoaded, productsLoaded} from "./actions";
import Header from "./components/header/header";


store.dispatch(productsLoaded())
store.dispatch(categoriesLoaded())

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" component={App} exact/>
                    <Route path="/createCategory" component={Create} exact/>
                    <Route path="/createProduct" component={CreateProduct} exact/>
                </Switch>
            </Router>
        </ErrorBoundry>
    </Provider>, document.getElementById('root')
);