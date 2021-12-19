import React from 'react';
import './Header.css';
import Logo from './Vector.svg';

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='Logo' />

    </div>
  );
}

export default Header;