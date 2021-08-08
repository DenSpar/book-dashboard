import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import {searchBook} from '@redux/actions';

const Header = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();

        if (value.trim()) {
        // для пагинатора добавить параметр page 
        dispatch(searchBook(value))
        .then(() => setValue(''));
        } else {
        setValue('');
        }
    };

    return (
        <div className="outerContainer backgroundColor header_sticky">
            <div className="innerContainer">
                <div className="headerContainer flex justify-content_space-around">
                    <h1 className="headerContainer__appName font-family_Cambria">Let'sFindBooks</h1>
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Введите название книги" className="headerContainer__searchBlock box-sizing border_1px border-radius_4px" value={value} onChange={event => (setValue(event.target.value))} />
                        <button className="searchBtn">Искать</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default connect(null, {searchBook})(Header);