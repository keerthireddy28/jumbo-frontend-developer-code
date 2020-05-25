import React, { useContext, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import { AppContext } from "../App";
import MovieItem from "../components/MovieItem/MovieItem";
import axios from "axios";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import useLoader from "../customHooks/useLoader";

const HomeScreen = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const moviesList = appState.moviesList;
  const [loader, setLoader] = useLoader(false);

  const handleSearch = async (query) => {
    //alert(`hello ${query}`);
    setLoader(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        appDispatch({ type: "UPDATE_MOVIES", payload: res.data.results });
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        appDispatch({ type: "UPDATE_MOVIES", payload: res.data.results });
        setLoader(false);
        //console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, []);

  return (
    <>
      {loader ? (
        <LoadingComponent />
      ) : (
        <>
          <HeaderComponent home>
            <SearchComponent handleSearch={handleSearch} />
          </HeaderComponent>
          <div className="app-main wrapper">
            <h2 className="app-main-title">Popular Movie</h2>
            {moviesList.length > 0 ? (
              <section className="app-main-gallery">
                {moviesList.map((movie) => (
                  <MovieItem movie={movie} key={movie.id} />
                ))}
              </section>
            ) : (
              <p className="no-results">No Results Found.</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
