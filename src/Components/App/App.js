import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

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
      ],
      playlist: 'My Playlist',
      playlistTracks: [
        {
          name: 'another chance',
          artist: 'Slipfunc',
          album: 'Album F01L',
          id: 5
        },
        {
          name: 'Royalty',
          artist: 'Egzod, M.C & N',
          album: 'Album EJ01',
          id: 6
        },
        {
          name: 'Legends Never Die',
          artist: 'League of Legends',
          album: 'TR003',
          id: 7
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }
  
  updatePlaylistName(name) {
    this.setState({ playlist: name });
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} />
            <Playlist 
              playlistName={this.state.playlist} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
