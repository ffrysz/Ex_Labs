import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const url = 'https://api.spacexdata.com/v4/launches';
    fetch(url)
      .then(function (raw) {
        // console.log(raw);
        return raw.json();
      })
      .then(function (parsed) {
        console.log(parsed);
      })

  }

  render() {
    return (
      <div className="App" >
      </div>
    );
  }
}

export default App;
