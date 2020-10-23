import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import MyNavbar from '../MyNavbar/MyNavbar';
import './Header.scss';

const Header = () => {
    return (
        <div className='header-container bg-color block'>
            <MyNavbar />
            <HeaderMain />
        </div>
    );
};

export default Header;