import React from "react";
import "./HeaderComponent.scss";
import logo from "./../../assets/images/logo.svg";

const HeaderComponent = ({ home, children, backdrop_img }) => {
  //alert(JSON.stringify(backdrop_img));
  return (
    <div>
      {home ? (
        <header className="app-header">
          <div className="app-header-wrapper">
            <img className="logo" src={logo} alt="logo" width="60" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {children}
        </header>
      ) : (
        <header
          className="movie-header"
          style={{
            height: 300,
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {children}
        </header>
      )}
    </div>
  );
};

export default HeaderComponent;
