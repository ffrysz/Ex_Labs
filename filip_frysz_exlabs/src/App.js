import React, { useState } from 'react';
import './styles/App.css';
import { useQuery } from 'react-query';

import Header from './components/Header/Header';
import Description from './components/Description/Description';

const url = 'https://api.spacex.land/graphql/';
const SPACEX_QUERY = `{
  launchesPast(limit: 5) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
      site_id
    }
    rocket {
      rocket_name
      fairings {
        recovered
      }
    }
    ships {
      name
      home_port
      image
      weight_kg
    }
    links {
      article_link
    }
  }
}`;


export default function App() {

  const [landingId, setLandingId] = useState(0);

  const { data, isLoading, error } = useQuery("launches", () => {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: SPACEX_QUERY })
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Error fetching data");
        } else {
          return response.json();
        }
      })
      .then((data) => data.data);
  });

  const loadPrevious = () => {
    if (landingId > 0) setLandingId(landingId - 1);
  }

  const loadNext = () => {
    if (landingId < 4) setLandingId(landingId + 1);
  }


  if (isLoading) return "Loading data...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="App" >
      <Header prev={loadPrevious} next={loadNext} current={landingId} />
      <Description data={data.launchesPast[landingId]} />
    </div >
  );
}

