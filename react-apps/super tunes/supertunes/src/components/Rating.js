import React from "react";

const Rating = (stars) => {
  return (
    <div className="rating">
      {[...Array(Math.round(stars.stars <= 5 ? stars.stars : 0)).keys()].map(
        (id) => {
          return <div className="star" key={id} />;
        }
      )}
    </div>
  );
};

export default Rating;
