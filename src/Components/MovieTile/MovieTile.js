import React from 'react';
import './MovieTile.css';

const MovieTile = ({ onClick, title, images }) => {
  const movieTileStyle = {
    backgroundImage: `url(${images.poster})`,
  };
  return (
    <div className="Movie-tile" onClick={onClick}>
      <div className="Movie-bg" style={movieTileStyle}>
      </div>
      <div className="Movie-title">{`${title}`}</div>
    </div>
  );
};

export default MovieTile;
