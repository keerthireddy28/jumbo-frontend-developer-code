import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import useLoader from "../customHooks/useLoader";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import imagePlaceholder from "../assets/images/movie-image-placeholder.png";

const MovieDetailsScreen = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loader, setLoader] = useLoader(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovie(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, []);

  const getReleaseYear = () => {
    let releaseYear = new Date(movie.release_date);
    let year = releaseYear.getFullYear();
    return year;
  };
  const getTime = () => {
    let runtime = movie.runtime;
    let time = `${Math.floor(runtime / 60)}h ${runtime % 60}min `;
    return time;
  };

  let imagePath = "";
  if (movie.poster_path == null) {
    imagePath = imagePlaceholder;
  } else {
    imagePath = `https://image.tmdb.org/t/p/w154/${movie.poster_path}`;
  }

  return (
    <>
      {loader ? (
        <LoadingComponent />
      ) : (
        <div className="movie">
          <HeaderComponent backdrop_img={movie.backdrop_path}>
            <div className="wrapper">
              <Link to="/">
                <span className="movie-header-backarrow-icon"></span>
              </Link>
            </div>
          </HeaderComponent>
          <main className="movie-main wrapper">
            <div className="movie-main-head">
              <img
                className="movie-main-head-img"
                alt={movie.title}
                src={imagePath}
              />
              <h1>{movie.title}</h1>
              <p className="movie-main-head-details">
                {getReleaseYear()}&nbsp;•&nbsp;
                {Math.ceil(movie.vote_average * 10)}% User Score
              </p>
              <p className="movie-main-head-details">{getTime()}</p>
            </div>
            <div className="movie-main-body">
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default MovieDetailsScreen;
