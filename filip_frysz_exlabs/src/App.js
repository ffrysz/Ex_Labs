import React from 'react';
import './styles/App.css';
import { useQuery } from 'react-query';

import Header from './components/Header/Header';

const url = 'https://api.spacex.land/graphql/';
const SPACEX_QUERY = `{
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }`;


export default function App() {

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

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="App" >
      <Header />
      <span>{data.launchesPast[0].mission_name}</span>
    </div >
  );
}

