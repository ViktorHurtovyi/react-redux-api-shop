import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions";


const DeleteCategory = ({categories, deleteCategory}) => {

    const [AllCategories, changeAllCategories] = useState([]);

    useEffect(() => {
        changeAllCategories(categories);
    },[categories]);

    const delClick = (id) => {
        deleteCategory(id)
    };

    return (
        <div className="container">
            <div className="row ">
                <h2 className='offset-3 col-9'>Список категорий</h2>
                <div className="form-group offset-3 col-9">
                    {AllCategories.map((category) =>
                        <div className='row' key={category.id}>
                            <div className="col col-3">
                            <h5>{category.name}</h5>
                            </div>
                            <div className="col col-3">
                            <button className='btn-sm btn-danger' onClick={()=>{delClick(category.id)}}>delete</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

export default connect(mapStateToProps, actions)(DeleteCategory);