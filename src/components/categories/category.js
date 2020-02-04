import React from 'react';
import './style.css'

const Category = ({ AllCategories, changeCategory }) => {
    return (
        <div className='row categories-wrapper'>
            <div className="offset-1 col col-10">
                <ul className=''>
            {AllCategories.map((category) =>
                <li key={category.id} onClick={()=>{changeCategory(category.id)}}>{category.name}</li>
            )}
                </ul>
            </div>
        </div>
    );
};

export default Category;