import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./LoadingComponent.scss";

const LoadingComponent = () => {
  return (
    <div className="loading">
      <PropagateLoader size={30} color={"#123abc"} />
    </div>
  );
};

export default LoadingComponent;
