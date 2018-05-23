import React from 'react';
import './MovieTile.css';

const randomPoster = 'http://images.adrise.tv/QtCnYPCZ64XDPKEt4tWfiSz4EQ0=/400x574/smart/img.adrise.tv/b6149d63-7fee-492d-9860-1008e6b7d612.jpg';

const MovieTile = ({ onClick, title, images = { poster: randomPoster } }) => {
  const movieTileStyle = {
    backgroundImage: images.poster,
  }
  return (
    <div className="Movie-tile" onClick={onClick}>
      <div className="Movie-bg" style={movieTileStyle}>
      </div>
      <div className="Movie-title">{`${title}`}</div>
    </div>
  )
}

export default MovieTile;