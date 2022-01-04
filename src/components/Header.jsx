import React, { useState, useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
import {startNewSearch, showSearchResult} from '@redux/actions';

const Header = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(
        () => {
            // удаление двойных пробелов
            const formatedQuery = value.trim().replace(/ /gi, "+");
            if(formatedQuery) {
                const handler = setTimeout(() => {
                    dispatch(startNewSearch(formatedQuery))
                    dispatch(showSearchResult(formatedQuery))
                    .then(() => setValue(''));
                }, 1000);
    
                return () => {
                    clearTimeout(handler);
                };    
            }
        },
        [value]
    );

    return (
        <div className="outerContainer backgroundColor header_sticky">
            <div className="innerContainer">
                <div className="headerContainer flex justify-content_space-around">
                    <h1 className="headerContainer__appName font-family_Cambria">Let'sFindBooks</h1>
                    <input
                        type="text"
                        placeholder="Введите название книги"
                        className="headerContainer__searchBlock box-sizing border_1px border-radius_4px"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
};

export default connect(null, {startNewSearch, showSearchResult})(Header);