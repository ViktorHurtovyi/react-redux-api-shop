import React from 'react';

const Category = ({ AllCategories }) => {
    return (
        <div>
            {AllCategories.map((category) =>
            <ul>
                <li>{category.name}</li>
            </ul>
            )}
        </div>
    );
};

export default Category;