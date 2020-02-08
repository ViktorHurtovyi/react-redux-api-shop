import React from 'react';
import './app.css';
import Header from "../header/header";
import {Create, Home} from "../pages";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AddProduct, AddCategory, DeleteCategory} from '../forms'

const App = () => {
    return <div>
        <Router>
            <Header/>
            <Switch>
                <Route path="/create-category" render={({history}) =>
                    <Create form={<AddCategory history={history}/>}/>} exact/>
                <Route path="/create-product" render={({history}) =>
                    <Create form={<AddProduct history={history}/>}/>} exact/>

                <Route path="/delete-category" render={({history}) =>
                    <Create form={<DeleteCategory history={history} />} />} exact/>
                <Route path="/" component={Home} exact/>
            </Switch>
        </Router>
    </div>;
};

export default App;
