import React from 'react';

const Header = () => (
    <div className="outerContainer backgroundColor header_sticky">
        <div className="innerContainer">
            <div className="headerContainer flex justify-content_space-around">
                <h1 className="headerContainer__appName font-family_Cambria">Let'sFindBooks</h1>
                <input type="text" placeholder="Введите название репозитория" className="headerContainer__searchBlock box-sizing border_1px border-radius_4px" />
            </div>
        </div>
    </div>
);

export default Header