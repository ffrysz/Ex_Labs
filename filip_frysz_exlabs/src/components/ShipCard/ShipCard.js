import React from 'react';
import './ShipCard.css';

const ShipCard = (props) => {

  const { shipData } = props;

  return (
    <div className='card'>
      <img src={shipData.image} alt='Ship'></img>
      <div className='information'>
        <h3 className='ship-name'>{shipData.name}</h3>
        <div className='col-40'>
          <span>Home port</span>
          <span>Weight [kg]</span>
        </div>
        <div className='col-60'>
          <span>{shipData.home_port}</span>
          <span>{shipData.weight_kg ? shipData.weight_kg : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
}

export default ShipCard;