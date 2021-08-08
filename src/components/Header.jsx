import React, { useState } from 'react';
import sendRequest from '@methods/sendRequest'

const Header = () => {
    const [value, setValue] = useState('');

    const searchBooks = (query) => {
        const formatedQuery = query.trim().replace(/ /gi, '+');
        // удаление двойных пробелов
        // для пагинатора добавить параметр page 

        sendRequest('GET', 'http://openlibrary.org/search.json?q=' + formatedQuery)
        .then(searchRes => console.log(searchRes))
        .then(() => setValue(''));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (value.trim()) {
        searchBooks(value);
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

export default Header