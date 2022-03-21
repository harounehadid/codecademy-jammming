import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'ocean of stars',
          artist: 'Demxntia',
          album: 'Album X12',
          id: 0
        },
        {
          name: 'Slow Motion',
          artist: 'Charlotte Lawrence',
          album: 'Album Z0014',
          id: 1
        },
        {
          name: 'One Final Effort',
          artist: 'Michael Salvatori & Martin O.D',
          album: 'Album YZ07',
          id: 2
        },
        {
          name: 'Nothing in Return',
          artist: 'Monsune',
          album: 'Album ML01',
          id: 3
        },
        {
          name: 'Black Coffee',
          artist: 'AVI',
          album: 'Album K07LM',
          id: 4
        }
      ]
    };
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*<!-- Add a SearchBar component -->*/}
          <div className="App-playlist">
            {/*<!-- Add a SearchResults component -->
            <!-- Add a Playlist component -->*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
