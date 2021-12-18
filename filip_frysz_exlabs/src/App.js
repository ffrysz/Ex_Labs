import React from 'react';
import './App.css';
import { useQuery } from 'react-query';

export default function App() {

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
      .then((data) => console.log(data));
  });


  return (
    <div className="App" >
    </div>
  );
}

// export default App;
