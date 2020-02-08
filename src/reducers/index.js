const initialState = {
    products: [],
    categories: [],
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS_LOADED":
            return {...state,
                products: action.payload
            };
        case "ADD_TODO_STARTED":
            return {...state,
                loading: true,
            };
        case "ADD_TODO_END":
            return {...state,
                loading: false,
            };
        case "CATEGORIES_LOADED":
            return {...state,
                categories: action.payload
            };
        case "CATEGORIES_SELECT":
            return {...state,
                products: action.payload
            };
        case "CATEGORY_DELETE":
            return state;
        default:
            return state;
    }
};

export default reducer;