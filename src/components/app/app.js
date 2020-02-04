import React from 'react';
import './app.css';
import Home from "../pages/home";

const App = ({bookstoreService}) => {
  return <div>
            <Home bookstoreService={ bookstoreService } />
         </div>;
};

export default App;
