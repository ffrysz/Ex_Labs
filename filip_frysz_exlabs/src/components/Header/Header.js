import React, { useEffect } from 'react';
import './Header.css';
import Logo from './Group.svg';

const Header = (props) => {

  const { prev, next, current } = props;


  useEffect(() => {
    const buttonNext = document.querySelector('#buttonNext');
    const buttonPrev = document.querySelector('#buttonPrev');

    if (current > 0) {
      buttonPrev.classList.add('button-available');
    } else if (current === 0) {
      buttonPrev.classList.remove('button-available');
    }
    if (current < 4) {
      buttonNext.classList.add('button-available');
    } else if (current === 4) {
      buttonNext.classList.remove('button-available');
    }
  });

  return (
    <div className='header'>
      <button className='button-change-launch' onClick={prev} id='buttonPrev'>
        <i className="fas fa-chevron-right previous"></i>
      </button>
      <img src={Logo} alt='Logo' />
      <button className='button-change-launch' onClick={next} id='buttonNext'>
        <i className="fas fa-chevron-right next"></i>
      </button>
    </div>
  );
}

export default Header;