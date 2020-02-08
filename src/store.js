import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";
import thunk from 'redux-thunk'
import {getCategoryList, getProductList, productsLoaded} from "./actions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getProductList());
store.dispatch(getCategoryList());

export default store;