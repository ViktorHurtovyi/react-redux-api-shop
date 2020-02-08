import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions";
import './style.css'

const AddProduct = ({categories, prepareCreateProduct, history}) => {

    const [name, changeName] = useState('');
    const [price, changePrice] = useState(0);
    const [discount_price, changediscountPrice] = useState(0);
    const [short_description, changeshortDescription] = useState('');
    const [long_description, changelongDescription] = useState('');
    const [image, changeimage] = useState('');
    const [category_id, changecategoryId] = useState(0);

    const [AllCategories, changeAllCategories] = useState([]);

    useEffect(() => {
        changeAllCategories(categories);
    });

    const addProduct = () => {
        prepareCreateProduct({
            name, price, discount_price, short_description, long_description,
            image, category_id
        });
        return history.push('/')
    };
    return (
        <div className='container-fluid'>
            <div className="container form-wrapper">
                <div className="row">
                    <h2 className='offset-4 col-4'>Добавить продукт</h2>
                    <div className="form-group offset-4 col-4">
                        Категория:
                        <select name="" id="" onChange={e => changecategoryId(e.target.value)}>
                            {AllCategories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group offset-4 col-4">
                        Название продукта
                        <input
                            onChange={e => changeName(e.target.value)} className="form-control-input" type="text"/>
                        <div className="form-group offset-4 col-4">
                        </div>
                        Цена
                        <input
                            onChange={e => changePrice(e.target.value)} className="form-control-input" type="text"/>
                    </div>
                    <div className="form-group offset-4 col-4">
                        Цена со скидкой
                        <input
                            onChange={e => changediscountPrice(e.target.value)} className="form-control-input"
                            type="text"/>
                    </div>
                    <div className="form-group offset-4 col-4">
                        Краткое описание
                        <input
                            onChange={e => changeshortDescription(e.target.value)} className="form-control-input"
                            type="text"/>
                    </div>
                    <div className="form-group offset-4 col-4">
                        Полное описание
                        <input
                            onChange={e => changelongDescription(e.target.value)} className="form-control-input"
                            type="text"/>
                    </div>
                    <div className="form-group offset-4 col-4">
                        Изображение
                        <input
                            onChange={e => changeimage(e.target.value)} className="form-control-input" type="text"/>
                    </div>
                    <button onClick={addProduct} className='btn btn-success offset-5 col-2'>Добавить</button>
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
export default connect(mapStateToProps, actions)(AddProduct);