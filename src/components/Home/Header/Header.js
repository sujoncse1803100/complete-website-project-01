import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    const color = {
        color: 'white'
    }
    return (
        <div className="header-container ">
            <Navbar color={color} />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;