import React from 'react';
import './Description.css';
import ShipCard from '../ShipCard/ShipCard';

const Description = (props) => {

  const { data } = props;

  const site = data.launch_site.site_id.replaceAll('_', ' ');

  const formatDate = (rawDate) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const y = rawDate.slice(0, 4);
    const m = monthNames[rawDate.slice(5, 7) - 1];
    const d = rawDate.slice(8, 10);
    return (`${d} ${m} ${y}`);
  }

  return (
    <div className='container'>
      <div className='description'>
        <div className='col-2 left-col'>
          <span className='info-name'>Mission</span>
          <span className='mission-name'>{data.mission_name}</span>
          <span className='info-name'>Rocket</span>
          <span className='info-text'>{data.rocket.rocket_name}</span>
          <button className='more-info-button'>Learn more</button>
        </div>
        <div className='col-2 right-col'>
          <span className='info-name'>Launch Date</span>
          <span className='info-text'>{formatDate(data.launch_date_local)}</span>
          <span className='info-name'>Launch Site</span>
          <span className='info-text site'>{site}</span>
        </div>
      </div>
      <div className='ships'>
        <span className='info-name'>Rescue ships</span>
        {data.ships.map((ship, index) => {
          return <ShipCard key={index} shipData={ship} />
        })}
      </div>
    </div>
  );
}

export default Description;