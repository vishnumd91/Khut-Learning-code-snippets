import React from "react";
import Rating from "./Rating";
import PropTypes from "prop-types";

const SongCard = (data) => {
  const { thumb, title, rating, artist } = data;
  return (
    <div>
      <div className="song-card">
        <img className="st-thumb" src={thumb} alt="thumb" />
        <div className="song-title">
          {title} by {artist}
        </div>
        <Rating stars={rating} />
      </div>
    </div>
  );
};

SongCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string,
      title: PropTypes.string,
      artist: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default SongCard;
