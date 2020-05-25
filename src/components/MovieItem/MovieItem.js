import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.scss";
import RatingBadgeComponent from "../RatingBadgeComponent/RatingBadgeComponent";
import imagePlaceholder from "./../../assets/images/movie-image-placeholder.png";

const MovieItem = ({ movie }) => {
  const getReleaseDate = (date) => {
    const d = new Date(date);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const releaseDate = `${month[d.getMonth()]} ${d.getFullYear()}`;
    return releaseDate;
  };
  let imagePath = "";
  if (movie.poster_path == null) {
    imagePath = imagePlaceholder;
  } else {
    imagePath = `https://image.tmdb.org/t/p/w154/${movie.poster_path}`;
  }
  return (
    <Link className="movieItem" to={`/movieDetails/${movie.id}`}>
      <img className="movieItem-image" alt={movie.title} src={imagePath} />
      <RatingBadgeComponent rating={Math.ceil(movie.vote_average * 10)} />
      <span className="movieItem-title">
        {movie.title.length > 20
          ? movie.title.substring(0, 20) + "..."
          : movie.title}
      </span>
      <span className="movieItem-date">
        {getReleaseDate(movie.release_date)}
      </span>
    </Link>
  );
};

export default MovieItem;
