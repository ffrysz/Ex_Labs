import React, { useState } from 'react';
import './Description.css';
import ShipCard from '../ShipCard/ShipCard';

const Description = (props) => {

  const { data } = props;

  const formatDate = (start) => {

    const rawDate = data.launch_date_local;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const y = rawDate.slice(0, 4);
    const m = monthNames[rawDate.slice(5, 7) - 1];
    const d = rawDate.slice(8, 10);


    if (start) {
      return (`${d} ${m} ${y}`);
    } else updateDate(`${d} ${m} ${y}`);
  }

  const [launchDate, updateDate] = useState(formatDate('start'));

  const changeDate = (rawDate, event) => {

    if (event && event.matches) {
      updateDate(rawDate.replace('T', ' '));
    } else {
      formatDate();
    }
  }

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  mediaQuery.addEventListener('change', (event) => changeDate(data.launch_date_local, event));

  const site = data.launch_site.site_id.replaceAll('_', ' ');

  const isRecovered = () => {
    let recoveredInfo = '';
    if (data.rocket.fairings != null) {
      recoveredInfo = data.rocket.fairings.recovered;
    }
    const recovered = <div className='rocket-name-recovered-container'>
      <span className='rocket-name-recovered'>Recovered</span>
    </div>;
    const unrecovered = <div className='rocket-name-unrecovered-container'>
      <span className='rocket-name-recovered'>Unrecovered</span>
    </div>;
    if (!recoveredInfo) {
      return unrecovered;
    } else {
      return recovered;
    }
  }

  return (
    <div className='container'>
      <div className='description'>
        <div className='col-2 left-col'>
          <span className='info-name'>Mission</span>
          <span className='mission-name'>{data.mission_name}</span>
          <span className='info-name'>Rocket</span>
          <div className='rocket-info'>
            <span className='info-text rocket-name-text'>{data.rocket.rocket_name}</span>
            {isRecovered()}
          </div>
          <button className='more-info-button' onClick={() => { window.location.href = 'https://spacex.com' }}>Learn more</button>
        </div>
        <div className='col-2 right-col'>
          <span className='info-name'>Launch Date</span>
          <span className='info-text'>{launchDate}</span>
          <span className='info-name'>Launch Site</span>
          <span className='info-text site'>{site}</span>
          <span className='info-site-long'>{data.launch_site.site_name_long}</span>
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