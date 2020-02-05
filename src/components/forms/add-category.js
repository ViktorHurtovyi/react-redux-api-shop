import React, {useState} from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions";

const AddCategory = ({createCategory, history}) => {

    const [name, changeName] = useState('');

    const addCategory = () => {
        createCategory(name);
        return history.push('/');
    };
    return (
        <div className="container">
            <div className="row ">
                <h2 className='offset-3 col-9'>Добавить категорию</h2>
                <div className="form-group offset-3 col-9">
                    <label
                        htmlFor="name"> Название </label>
                    <input id='name'
                           onChange={e => changeName(e.target.value)} className="form-control-input" type="text"/>
                    <button type="submit" className="btn btn-primary" onClick={addCategory}>Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default connect(() => {}, actions)(AddCategory);