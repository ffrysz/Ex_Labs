import React from 'react';
import './Description.css';

const Description = (props) => {

  const { name } = props;

  return (
    <div className='description'>
      <div className='col-2 left-col'>
        <span className='info-name'>Mission</span>
        <span className='mission-name'>{name}</span>
        <span className='info-name'>Rocket</span>
        <span className='info-text'>Falcon 9</span>
        <button className='more-info-button'>Learn more</button>
      </div>
      <div className='col-2 right-col'>
        <span className='info-name'>Launch Date</span>
        <span className='info-name'>Launch Site</span>

      </div>
    </div>
  );
}

export default Description;