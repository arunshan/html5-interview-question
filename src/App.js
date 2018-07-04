import React, { Component } from 'react';
import MovieTile from './Components/MovieTile/MovieTile';
import './App.css';

const randomPoster = '//images.adrise.tv/4mJyEE5M9qTt_-FVYqeEgN93g64=/400x574/smart/img.adrise.tv/63699c42-9607-4eb6-8626-465354c018b5.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Tubi</h1>
          <input className="Search-input" />
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
