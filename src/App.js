import React, { Component } from 'react';
import MovieTile from './Components/MovieTile/MovieTile';
import './App.css';

const randomPoster = 'http://images.adrise.tv/QtCnYPCZ64XDPKEt4tWfiSz4EQ0=/400x574/smart/img.adrise.tv/b6149d63-7fee-492d-9860-1008e6b7d612.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Tubi</h1>
          <input className="Search-input" type="url" />
        </header>
        <div className="Search-results">
          <MovieTile
            images={{ poster: randomPoster }}
            title={'some title'}
            onClick={() => console.log('pretending to navigate')}
          />
        </div>
      </div>
    );
  }
}

export default App;
