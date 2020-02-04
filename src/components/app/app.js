import React from 'react';
import './app.css';
import {ProductList} from "../products";

const App = ({bookstoreService}) => {
  return <div>
            <ProductList bookstoreService={ bookstoreService } />
         </div>;
};

export default App;
