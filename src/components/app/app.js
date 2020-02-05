import React from 'react';
import './app.css';
import Header from "../header/header";
import {Create, Home} from "../pages";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AddProduct, AddCategory } from '../forms'

const App = () => {
    return <div>
        <Router>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/createCategory" render={() => <Create form={<AddCategory />} />} exact/>
                <Route path="/createProduct" render={() => <Create form={<AddProduct />} />} exact/>
            </Switch>
        </Router>
    </div>;
};

export default App;
