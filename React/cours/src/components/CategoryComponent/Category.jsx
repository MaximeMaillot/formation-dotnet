import React from 'react';
import "./Category.css"

const Category = ({ activeCategory, setActiveCategory, categoryList }) => {
    return (
        <div className='category'>
            <select name="category" className='form-select' value={activeCategory} onChange={(e) => { setActiveCategory(e.target.value) }}>
            </select>
            <option value="---"></option>
            {categoryList.map((category) => {
                <option value={category}>{category}</option>
            })}
        </div>
    );
};

export default Category;