import React from "react";
import "./RatingBadgeComponent.scss";

const RatingBadgeComponent = ({ rating }) => {
  let badgeClass = "";
  if (rating > 70) {
    badgeClass = "movie-rate";
  } else if (rating > 40) {
    badgeClass = "movie-rate medium";
  } else {
    badgeClass = "movie-rate low";
  }
  return <span className={badgeClass}>{rating}%</span>;
};

export default RatingBadgeComponent;
