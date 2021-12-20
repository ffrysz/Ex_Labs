import React from 'react';
import './Header.css';
import Logo from './Group.svg';
import Arrow from './Path.svg';

const Header = (props) => {

  const { prev, next } = props;

  return (
    <div className='header'>
      <button className='button-change-launch' onClick={prev}>
        <i className="fas fa-chevron-right previous"></i>
      </button>
      <img src={Logo} alt='Logo' />
      <button className='button-change-launch' onClick={next}>
        <i className="fas fa-chevron-right next"></i>
      </button>
    </div>
  );
}

export default Header;